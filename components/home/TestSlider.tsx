'use client';

import React from 'react';

const TestSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    { id: 1, image: '/img/visual/slide1.jpg', title: '테스트 슬라이드 1' },
    { id: 2, image: '/img/visual/slide2.jpg', title: '테스트 슬라이드 2' },
    { id: 3, image: '/img/visual/slide3.jpg', title: '테스트 슬라이드 3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[400px] relative bg-gray-100 border-4 border-red-500">
      <h2 className="absolute top-4 left-4 z-20 bg-yellow-300 p-2 text-black font-bold">
        테스트 슬라이더 (현재: {currentSlide + 1}/{slides.length})
      </h2>
      
      {/* 단순 이미지 표시 */}
      <div className="w-full h-full relative">
        <img 
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4">
            {slides[currentSlide].title}
          </h3>
        </div>
      </div>
      
      {/* 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-4 rounded"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-4 rounded"
      >
        ▶
      </button>
    </div>
  );
};

export default TestSlider;