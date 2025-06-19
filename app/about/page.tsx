'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.sub01_01}>
      {/* contents start */}
      <div className={styles.contents}>
        <div className={styles.contents_title}>
          <div className={styles.inner}>
            <h2 className={isVisible ? styles.fadeUp : ''}>삼지상사 소개</h2>
          </div>
        </div>

        {/* contents_detail start */}
        <div className={styles.contents_detail}>
          <div className={styles.inner}>
            <div className={styles.introduction}>
              <ul>
                <li>
                  <div className={styles.img}>
                    <div className={`${styles.clipAnimation} ${isVisible ? styles.animate : ''}`}>
                      <Image
                        src="/img/sub/sub01/img1.jpg"
                        alt="이미지"
                        width={600}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`${styles.tit} ${isVisible ? styles.slideLeft : ''}`}>
                    <h2>ABOUT SAMJI TRADING</h2>
                    <h4>삼지상사 소개</h4>
                    <p>
                      본사는 축산물 가공품만을 수입하는 소고기 가공식품 수입전문 회사입니다.<br />
                      다년간 축적된 소고기 가공의 노하우와 인프라를 통하여 러시아, 남미, 인도, 호주, 뉴질랜드 등에서<br />
                      원자재를 직접 구매하여 균일한 품질의 소고기를 제공하고 있습니다.
                    </p>
                    <p>
                      2007년 Ho Chi Minh City, Vietnam에 현지 기업과 협력하여 합작 가공공장을 설립한 뒤 현재까지<br />
                      1차 가공 생산하여 수입하고 있으며 세계적 축산물 가공기업인 FRIGORIFICO ALLANA (India)사와<br />
                      국내 총판(독점계약) 및 OEM계약을 체결하여 사업의 기본이 되는 안정적인 물량 공급이 가능토록<br />
                      수입선을 다변화 하였습니다.
                    </p>
                    <p>
                      소고기 가공 직수입 전문 회사로서 특장점을 십분 발휘하여 품목별 제품을 세분화하였고 소비자가<br />
                      만족할 수 있도록 높은 퀄리티의 제품을 최저의 가격으로 공급하고 있습니다. 주요 소비처는 홈쇼핑,<br />
                      대형 프랜차이즈, 특급호텔·리조트, 기업체 단체급식, 웨딩홀, 식품공장 등입니다.
                    </p>
                    <p>
                      (주)삼지상사는 활발한 영업활동과 다년간 안정적인 공급을 통하여 협력업체(수요자)와의 신뢰를<br />
                      쌓아왔으며 다수의 업체와 협력하여 품질과 원가경쟁력(수익창출)의 기반을 다져가고 있습니다.<br />
                      국내 유통되는 소고기와 품질의 큰 차이가 없어서 수요가 크게 증가하고 있는 것도 저희 (주)삼지만의<br />
                      자랑입니다.
                    </p>
                    <p>
                      2019년 매출 100억 원 달성 이후 2021년까지 3년 연속 매출 100억 원 이상을 달성하였습니다.<br />
                      또한 안정적인 사업성과 재무상태를 기반으로 Ho Chi Minh City, Vietnam에 제2공장, Colombia에<br />
                      제1공장 설립계획 및 부지확보를 하였습니다.
                    </p>
                    <p>
                      (주)삼지상사는 더욱 안전한 먹거리를 제공하며 고객들의 만족을 위해 끊임없이 노력할 것입니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.history}>
              <h2>OUR HISTORY</h2>
              <h4>삼지상사 회사 연혁</h4>
              <div className={`${styles.clipAnimation} ${isVisible ? styles.animate : ''}`}>
                <ul>
                  <li>
                    <h3>1997</h3>
                    <div className={styles.tit}>
                      <p>삼지 Trading 설립</p>
                    </div>
                  </li>
                  <li>
                    <h3>2007</h3>
                    <div className={styles.tit}>
                      <p>
                        Ho Chi Minh City, Vietnam<br />
                        합작 가공공장 설립
                      </p>
                    </div>
                  </li>
                  <li>
                    <h3 className={styles.violet}>2008</h3>
                    <div className={styles.tit}>
                      <p>
                        호주, 뉴질랜드, 러시아,남미<br />
                        (아르헨티나, 콜롬비아, 파라과이, 멕시코 등)
                        원자재 수입 및 공급계약 체결
                      </p>
                    </div>
                  </li>
                  <li>
                    <h3 className={styles.violet}>2010</h3>
                    <div className={styles.tit}>
                      <p>
                        Ho Chi Minh City, Vietnam<br />
                        대량 생산라인 추가 구축 및<br />
                        전문 생산시작
                      </p>
                    </div>
                  </li>
                  <li>
                    <h3>2013</h3>
                    <div className={styles.tit}>
                      <p>(주) 삼지 Trading 법인전환</p>
                    </div>
                  </li>
                  <li>
                    <h3>2016</h3>
                    <div className={styles.tit}>
                      <p>
                        FRIGORIFICO ALLANA(India) 사와<br />
                        국내 총판계약 및 OEM 계약 체결
                      </p>
                    </div>
                  </li>
                  <li>
                    <h3 className={styles.violet}>2017</h3>
                    <div className={styles.tit}>
                      <p>
                        대형 프랜차이즈 및 특급호텔,<br />
                        대형리조트 공급 및 납품계약 체결
                      </p>
                    </div>
                  </li>
                  <li>
                    <h3>2018</h3>
                    <div className={styles.tit}>
                      <p>
                        한류선정조직위원회 대표기업 선정 및<br />
                        한국여성언론협회 자문위원 위촉
                      </p>
                      <p>
                        대한민국 베스트브랜드협회 선정<br />
                        '2018 대한민국 베스트기업' 대상 수상<br />
                        우루과이 자숙곱창 수입
                      </p>
                    </div>
                  </li>
                  <li>
                    <h3>2022</h3>
                    <div className={styles.tit}>
                      <p>3년 연속 연 매출 100억 원 달성</p>
                      <p>
                        Vietnam 제 2가공공장 및<br />
                        Colombia 제 1공장 설립계획 및<br />
                        부지확보
                      </p>
                      <p>프랜차이즈 1호점 오픈(소소팜강화점)</p>
                    </div>
                  </li>
                  <li>
                    <h3>2023</h3>
                    <div className={styles.tit}>
                      <p>Rusia 원료육 공급 계약 체결</p>
                      <p>프랜차이즈 2호점 오픈(소소팜구월점)</p>
                    </div>
                  </li>
                  <li>
                    <h3>2024</h3>
                    <div className={styles.tit}>
                      <p>5년 연속 연 매출 100억 이상 달성</p>
                      <p>2024 셰계식품박람회 참가</p>
                      <p>우루과이 독점공급계약체결</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.sub_img}>
              <div className={`${styles.image_show_wrap} ${isVisible ? styles.show_img01 : ''}`}>
                <div className={`${styles.image_show_wrap2} ${isVisible ? styles.show_img02 : ''}`}>
                  <Image
                    src="/img/sub/sub01/img2.png"
                    alt="이미지"
                    width={1200}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.sub_img}>
              <div className={`${styles.image_show_wrap} ${isVisible ? styles.show_img01 : ''}`}>
                <div className={`${styles.image_show_wrap2} ${isVisible ? styles.show_img02 : ''}`}>
                  <Image
                    src="/img/sub/sub01/img3.png"
                    alt="이미지"
                    width={1200}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contents_detail end */}
      </div>
      {/* contents end */}
    </section>
  );
}