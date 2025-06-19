'use client';

import React, { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/img/visual/slide1.jpg',
      title: '축산물 가공품만을 수입유통',
      subtitle: ['러시아, 남미, 인도, 뉴질랜드', '등에서'],
      description: ['직접구매하여', ' 제공합니다.']
    },
    {
      id: 2,
      image: '/img/visual/slide2.jpg',
      title: '최상의 품질을 자랑하는',
      subtitle: ['프리미엄 육류 전문', ''],
      description: ['엄선된 제품만을', ' 공급합니다.']
    },
    {
      id: 3,
      image: '/img/visual/slide3.jpg',
      title: '고객 만족을 최우선으로',
      subtitle: ['신속하고 정확한 배송', ''],
      description: ['믿을 수 있는 파트너가', ' 되겠습니다.']
    },
    {
      id: 4,
      image: '/img/visual/slide4.jpg',
      title: '다양한 제품 라인업',
      subtitle: ['갈비탕, 갈비찜, 도가니탕', ' 등'],
      description: ['고객님의 니즈에 맞춘', ' 제품 구성']
    },
    {
      id: 5,
      image: '/img/visual/slide5.jpg',
      title: '전국 유통망 보유',
      subtitle: ['빠르고 안전한', ' 콜드체인 시스템'],
      description: ['최상의 신선도를', ' 유지합니다.']
    }
  ];

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.heroSlider}>
      {/* 슬라이드 컨테이너 */}
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
          >
            {/* 이미지 */}
            <img 
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
            />
            
            {/* 어두운 오버레이 */}
            <div className={styles.overlay} />
            
            {/* 텍스트 컨텐츠 */}
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                <span>{slide.title}</span>
              </h2>
              <h3 className={styles.subtitle}>
                <span>{slide.subtitle[0]}{slide.subtitle[1]}</span>
              </h3>
              <p className={styles.description}>
                <span>{slide.description[0]}{slide.description[1]}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className={`${styles.navButton} ${styles.prevButton}`}
      >
        ‹
      </button>
      
      <button
        onClick={nextSlide}
        className={`${styles.navButton} ${styles.nextButton}`}
      >
        ›
      </button>
      
      {/* 페이지네이션 */}
      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;