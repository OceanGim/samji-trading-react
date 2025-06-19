'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Phone Call Button - 깔끔한 디자인 */}
      <div className="fixed bottom-24 right-3 sm:right-5 z-[9000]">
        <a
          href="tel:010-9999-3436"
          className="block bg-[#1e3a8a] text-white rounded-2xl px-3 sm:px-4 text-center shadow-xl hover:bg-[#1e40af] transition-all duration-300 group hover:scale-105"
          style={{ width: '80px', maxWidth: '80px', paddingTop: '20px', paddingBottom: '20px' }}
          aria-label="전화 상담"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <Phone className="w-6 h-6 text-[#1e3a8a]" />
            </div>
            <div className="font-bold text-lg leading-tight">
              <div>010</div>
              <div>9999</div>
              <div>3436</div>
            </div>
            <div className="text-base font-bold mt-3">
              전화상담
            </div>
          </div>
        </a>
      </div>

      {/* Scroll to Top Button - 반응형 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-3 sm:right-5 z-[9000] bg-white border-2 border-blue-500 rounded-full w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-blue-50 transition-all duration-300 animate-fadeIn hover:scale-110"
          aria-label="맨 위로 이동"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" strokeWidth={3} />
        </button>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        :global(.animate-fadeIn) {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FloatingButtons;