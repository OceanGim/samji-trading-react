'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="space-y-2">
          <span className="block sm:inline">상호 : 삼지상사총판</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="block sm:inline">주소 : 의정부시 고산동 996-3 고산한강 듀클래스 B동 923호</span>
          <br />
          <span className="block sm:inline">대표자명 : 박종대</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="block sm:inline">문의전화 : 010-9999-3436</span>
        </p>
        <small className="block mt-4 text-gray-400">
          Copyright ⓒ삼지상사총판. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;