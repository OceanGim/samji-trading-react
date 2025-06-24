'use client';

import React from 'react';
import ProductMenu from '../[id]/ProductMenu';

export default function ProductFeaturesPage() {
  // 제품특장점 페이지를 위한 가상의 product 객체
  const featuresProduct = {
    id: 0,
    name: '제품특장점',
    category: 'features'
  };

  return (
    <section className="sub02_features sub02">
      {/* contents start */}
      <div className="contents">
        {/* Product Menu with Dropdown */}
        <ProductMenu currentProduct={featuresProduct} />

        <div className="contents_title">
          <div className="inner">
            {/* <h2 data-aos="fade-up" data-aos-duration="1000">제품특장점</h2> */}
          </div>
        </div>

        {/* contents_detail start */}
        <div className="contents_detail">
          <div className="inner">
            <div className="sub_txt"><p>삼지상사 제품의 특별한 가치</p></div>
            
            {/* 제품특장점 이미지 */}
            <div className="sub_img">
              <div className="image_show_wrap wow show_img01">
                <div className="image_show_wrap2 wow show_img02">
                  <img src="/img/products/features.jpg" alt="제품특장점" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contents_detail end */}
      </div>
      {/* contents end */}

      <style jsx>{`
        /* 원본 스타일 유지 */
        .contents_detail .inner { padding: 0; margin: 0 auto; }
        .sub_txt { text-align: center; font-size: 24px; color: #333; padding: 20px 0; font-weight: bold; margin-bottom: 50px; font-family: "Noto Sans KR", sans-serif; line-height: 1.4; }
        .sub_txt p { font-size: 24px; color: #333; }
        
        .sub_img { position: relative; margin-bottom: 30px; }
        .image_show_wrap { position: relative; width: 100%; overflow: hidden; }
        .image_show_wrap2 { position: relative; width: 100%; }
        .sub_img img { width: 100%; height: auto; display: block; }
        
        /* 반응형 */
        @media (max-width: 768px) {
          .sub_txt { font-size: 18px; padding: 15px 0; }
          .sub_txt p { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}