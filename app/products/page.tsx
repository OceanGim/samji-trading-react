'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { useSearchParams } from 'next/navigation';

// 실제 제품 카테고리만 표시
const categories = [
  { id: 'all', name: '전체', count: products.length },
  { id: '탕류', name: '탕류', count: products.filter(p => p.category === '탕류').length },
  { id: '찜류', name: '찜류', count: products.filter(p => p.category === '찜류').length },
  { id: '특수부위', name: '특수부위', count: products.filter(p => p.category === '특수부위').length },
  { id: '소스', name: '소스', count: products.filter(p => p.category === '소스').length },
  { id: 'features', name: '제품특장점', count: 0, isLink: true },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const getCategoryProducts = (categoryId: string) => {
    if (categoryId === 'all' || categoryId === 'features') return [];
    return products.filter(p => p.category === categoryId);
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Tab Menu - 원본 사이트 스타일 */}
      <div className="sticky top-[50px] z-40 bg-black/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-[1400px] mx-auto">
          <ul className="flex">
            {categories.map((category) => (
              <li 
                key={category.id} 
                className="flex-1 relative group"
                onMouseEnter={() => category.id !== 'features' && category.id !== 'all' && setOpenCategory(category.id)}
                onMouseLeave={() => setOpenCategory(null)}
              >
                {category.isLink ? (
                  <Link
                    href="/products/features"
                    className={`relative block w-full py-8 text-center text-white transition-all duration-300 text-base lg:text-lg font-medium hover:bg-white/10`}
                  >
                    {category.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative w-full py-8 text-center text-white transition-all duration-300 text-base lg:text-lg font-medium
                      ${selectedCategory === category.id 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-white/10'
                      }`}
                  >
                    {category.name}
                    <span className="ml-2 text-sm opacity-80">({category.count})</span>
                    
                    {/* Active Indicator */}
                    {selectedCategory === category.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                    )}
                  </button>
                )}

                {/* Dropdown for category products */}
                <div 
                  className={`absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
                    openCategory === category.id && category.id !== 'all' && category.id !== 'features' 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="py-2">
                    {getCategoryProducts(category.id).map((product, index) => (
                      <li 
                        key={product.id}
                        style={{
                          animation: openCategory === category.id ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                        }}
                      >
                        <Link
                          href={`/products/${product.id}`}
                          className={`block px-6 py-3 text-sm text-white hover:bg-primary/20 hover:pl-8 transition-all duration-200`}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <style jsx>{`
                  @keyframes slideIn {
                    from {
                      opacity: 0;
                      transform: translateY(-10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              제품 소개
            </h1>
            <p className="text-lg text-gray-600">
              삼지상사총판의 다양한 프리미엄 제품을 만나보세요
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Link href={`/products/${product.id}`}>
                  <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-64 lg:h-72 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
                        {product.category}
                      </div>
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {product.description}
                      </p>
                      
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-medium group-hover:underline">
                          자세히 보기
                        </span>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">해당 카테고리에 제품이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}