'use client';

import React, { useState } from 'react';

const ProductCatalog: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 임시 플레이스홀더 이미지 (실제 이미지가 없을 때 표시)
  const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZTVlN2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZiNzI4MCIg7KCc7ZKI7Lm07YOI66Gc6re4IOydtOuvuOyngCDspIDruYQ757CMPC90ZXh0Pjwvc3ZnPg==';

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            제품 카탈로그
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            삼지상사총판의 모든 제품 정보를 한눈에 확인하세요
          </p>
        </div>
        
        {/* 이미지 컨테이너 */}
        <div className="relative bg-gray-100 rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* 로딩 표시 */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-gray-500">이미지 로딩 중...</div>
            </div>
          )}
          
          {/* 이미지를 클릭하면 확대해서 볼 수 있도록 링크 추가 */}
          <a 
            href={imageError ? placeholderImage : "/img/product-catalog.jpg"}
            target="_blank" 
            rel="noopener noreferrer"
            className="block cursor-zoom-in group"
          >
            <img
              src={imageError ? placeholderImage : "/img/product-catalog-small.jpg"}
              alt="삼지상사 제품 카탈로그 - 갈비탕, 도가니탕, 소고기탕 등"
              className={`w-full h-auto block ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              onLoad={() => {
                setImageLoaded(true);
                console.log('Image loaded successfully');
              }}
              onError={(e) => {
                console.error('Image failed to load:', e);
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          </a>
        </div>
        
        {/* 디버깅 정보 */}
        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>이미지 상태: {imageError ? '에러' : imageLoaded ? '로드됨' : '로딩 중'}</p>
          <p>이미지 경로: /img/product-catalog-small.jpg (143KB)</p>
        </div>
        
        {/* 안내 문구 및 연락처 */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              이미지를 클릭하면 크게 볼 수 있습니다
            </span>
          </p>
          
          {/* 제품 문의 CTA */}
          <div className="bg-gray-50 rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-gray-800 mb-2">제품 구매 문의</p>
            <a 
              href="tel:010-9999-3436" 
              className="inline-flex items-center text-2xl font-bold text-primary hover:text-blue-800 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              010-9999-3436
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;