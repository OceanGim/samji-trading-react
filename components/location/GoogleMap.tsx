'use client';

import React from 'react';

const GoogleMap: React.FC = () => {
  // 삼지상사총판 좌표
  const latitude = 37.743100;
  const longitude = 127.033700;
  
  // 구글맵 iframe URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.2988497!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s삼지상사총판!5e0!3m2!1sko!2skr!4v${Date.now()}`;

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="삼지상사총판 위치"
    />
  );
};

export default GoogleMap;