'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

interface ProductMenuProps {
  currentProduct: {
    id: number;
    category: string;
  };
}

const categories = [
  { id: 'all', name: '전체', count: products.length },
  { id: '탕류', name: '탕류', count: products.filter(p => p.category === '탕류').length },
  { id: '찜류', name: '찜류', count: products.filter(p => p.category === '찜류').length },
  { id: '특수부위', name: '특수부위', count: products.filter(p => p.category === '특수부위').length },
  { id: '소스', name: '소스', count: products.filter(p => p.category === '소스').length },
  { id: 'features', name: '제품특장점', count: 0 },
];

export default function ProductMenu({ currentProduct }: ProductMenuProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const getCategoryProducts = (categoryId: string) => {
    if (categoryId === 'all' || categoryId === 'features') return [];
    return products.filter(p => p.category === categoryId);
  };

  return (
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
              <Link
                href={category.id === 'features' ? '/products/features' : category.id === 'all' ? '/products' : `/products?category=${category.id}`}
                className={`relative block w-full py-8 text-center text-white transition-all duration-300 text-base lg:text-lg font-medium
                  ${currentProduct.category === category.id 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-white/10'
                  }`}
              >
                {category.name}
                {category.count > 0 && <span className="ml-2 text-sm opacity-80">({category.count})</span>}
                
                {/* Active Indicator */}
                {currentProduct.category === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                )}
              </Link>

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
                        className={`block px-6 py-3 text-sm text-white hover:bg-primary/20 hover:pl-8 transition-all duration-200
                          ${currentProduct.id === product.id 
                            ? 'bg-primary/30 font-bold pl-8 border-l-4 border-primary' 
                            : ''
                          }`}
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
  );
}