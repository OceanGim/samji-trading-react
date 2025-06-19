'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/data/products';

// 실제 제품 카테고리만 표시
const categories = [
  { id: 'all', name: '전체', count: products.length, href: '/products' },
  { id: '탕류', name: '탕류', count: products.filter(p => p.category === '탕류').length, href: '/products' },
  { id: '찜류', name: '찜류', count: products.filter(p => p.category === '찜류').length, href: '/products' },
  { id: '특수부위', name: '특수부위', count: products.filter(p => p.category === '특수부위').length, href: '/products' },
  { id: '소스', name: '소스', count: products.filter(p => p.category === '소스').length, href: '/products' },
  { id: 'features', name: '제품특장점', count: 0, href: '/products/features' },
];

export default function ProductFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Sticky Tab Menu - 원본 사이트 스타일 */}
      <div className="sticky top-[50px] z-40 bg-black/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-[1400px] mx-auto">
          <ul className="flex">
            {categories.map((category) => (
              <li key={category.id} className="flex-1 relative">
                <Link
                  href={category.href}
                  className={`relative block w-full py-8 text-center text-white transition-all duration-300 text-base lg:text-lg font-medium
                    ${category.id === 'features' 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-white/10'
                    }`}
                >
                  {category.name}
                  {category.count > 0 && (
                    <span className="ml-2 text-sm opacity-80">({category.count})</span>
                  )}
                  
                  {/* Active Indicator */}
                  {category.id === 'features' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              제품특장점
            </h1>
            <p className="text-lg text-gray-600">
              삼지상사총판 제품의 특별한 가치를 소개합니다
            </p>
          </motion.div>

          {/* Features Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-[1000px] mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/img/sub/sub02/sub02_11/img1.jpg"
                alt="제품특장점"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}