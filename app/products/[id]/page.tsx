'use client';

import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { use } from 'react';
import ProductMenu from './ProductMenu';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <section className={`sub02_${String(id).padStart(2, '0')} sub02`}>
      {/* contents start */}
      <div className="contents">
        {/* Product Menu with Dropdown */}
        <ProductMenu currentProduct={product} />

        <div className="contents_title">
          <div className="inner">
            {/* <h2 data-aos="fade-up" data-aos-duration="1000">갈비탕</h2> */}
          </div>
        </div>

        {/* contents_detail start - 원본 HTML 완벽 복사 */}
        <div className="contents_detail">
          <div className="inner">
            {/* 갈비탕 상세 내용 */}
            {product.id === 1 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_01/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

            <div className="chart">
              <span>(단위 : 원, VAT포함)</span>
              <table>
                <tbody>
                  <tr>
                    <th colSpan={6}>상온제품</th>
                  </tr>
                  <tr>
                    <th>제품명</th>
                    <th>규격</th>
                    <th>내용량</th>
                    <th>원산지</th>
                    <th>단가</th>
                    <th>납품 판매가(원)</th>
                  </tr>
                  <tr>
                    <td>갈비탕</td>
                    <td>1박스 = 3kg / 6캔</td>
                    <td>1.5kg</td>
                    <td>인도산</td>
                    <td>28,000</td>
                    <td>28,000 x 6 = 168,000</td>
                  </tr>
                </tbody>
              </table>
              <p>택배운송료 포함가</p>
              <div className="tit">
                <p>
                  갈비탕 또는 찜 요리에 사용 가능한 제품입니다.<br/>
                  대형 프랜차이즈, 웨딩홀, 가공업체등에서 업체별 용도에 맞게 사용 가능합니다.<br/>
                  장기간(36개월) 실온보관이 가능하여 편리하게 사용할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="sub_img">
              <div className="image_show_wrap wow show_img01">
                <div className="image_show_wrap2 wow show_img02">
                  <img src="/img/sub/sub02/sub02_01/img2.jpg" alt="이미지" />
                </div>
              </div>
            </div>

            <div className="sub_img">
              <div className="image_show_wrap wow show_img01">
                <div className="image_show_wrap2 wow show_img02">
                  <img src="/img/sub/sub02/sub02_01/img3.jpg" alt="이미지" />
                </div>
              </div>
            </div>

            {/* 제품 특장점 섹션 */}
            <div id="product-features">
              <div className="sub_img">
                <div className="image_show_wrap wow show_img01">
                  <div className="image_show_wrap2 wow show_img02">
                    <img src="/img/sub/sub02/sub02_01/img4.jpg" alt="이미지" />
                  </div>
                </div>
              </div>

              <div className="sub_img">
                <div className="image_show_wrap wow show_img01">
                  <div className="image_show_wrap2 wow show_img02">
                    <img src="/img/sub/sub02/sub02_01/img5.jpg" alt="이미지" />
                  </div>
                </div>
              </div>

              <div className="sub_img">
                <div className="image_show_wrap wow show_img01">
                  <div className="image_show_wrap2 wow show_img02">
                    <img src="/img/sub/sub02/sub02_01/img6.jpg" alt="이미지" />
                  </div>
                </div>
              </div>
            </div>

            <div className="youtube">
              <ul>
                <li>
                  <div className="clip-animation wow">
                    <div className="video_wrap">
                      <div className="video">
                        <iframe 
                          src="https://www.youtube.com/embed/GmyoMDmXWVY?playlist=GmyoMDmXWVY&mute=1&loop=1&autoplay=1&controls=0&modestbranding=1" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <p>삼지상사 캔갈비 A 오픈</p>
                  </div>
                </li>
                <li>
                  <div className="clip-animation wow">
                    <div className="video_wrap">
                      <div className="video">
                        <iframe 
                          src="https://www.youtube.com/embed/xGwKB-2bJJ4?playlist=xGwKB-2bJJ4&mute=1&loop=1&autoplay=1&controls=0&modestbranding=1" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <p>삼지상사 캔갈비 A 사용예시</p>
                  </div>
                </li>
              </ul>
            </div>
              </>
            )}

            {/* 뼈없는 갈비탕 상세 내용 */}
            {product.id === 2 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_02/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>뼈없는 갈비탕</td>
                        <td>1박스 = 3kg / 6캔</td>
                        <td>1.5kg</td>
                        <td>인도산</td>
                        <td>30,000</td>
                        <td>30,000 x 6 = 180,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      최신 트렌드에 맞춰 생산한 제품으로 기존 갈비탕에 뼈를 제거하여 가공한 제품입니다.<br/>
                      뼈없는 갈비탕과 찜 등 다양한 요리에 적합한 제품으로,<br/>
                      가격대비 고품질 제품으로 프랜차이즈, 웨딩홀, 가공업체등에서 업체별 용도에 맞게 사용 가능합니다.<br/>
                      장기간(36개월) 실온보관이 가능하여 편리하게 사용할 수 있습니다.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* 뼈없는 참갈비찜 상세 내용 */}
            {product.id === 3 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_03/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>뼈없는 참갈비찜</td>
                        <td>1박스 = 3kg / 6캔</td>
                        <td>1.5kg</td>
                        <td>인도산</td>
                        <td>30,000</td>
                        <td>30,000 x 8 = 240,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      자사의 뼈없는 갈비 원육(인도산)과 특제 양념갈비소스를 활용한 제품입니다.<br/>
                      개봉 후 데우기만 하면 조리가 완료되어 간편하며, 기호에 맞게 야채를 추가하시면 더욱 풍성한 맛을 느낄 수 있습니다.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* 꼬리곰탕 상세 내용 */}
            {product.id === 5 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_05/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>꼬리곰탕</td>
                        <td>1박스 = 3kg / 5파우치</td>
                        <td>2kg</td>
                        <td>러시아산</td>
                        <td>50,000</td>
                        <td>50,000 x 5 = 250,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      곡물 사육한(Grain-fed) 소의 꼬리를 사용하였으며 파우치 제품의 특성을 통해 숙성과정을 거쳐 조금 더 부드러운 육질과<br/>
                      풍부한 육향을 느낄 수 있습니다.<br/>
                      현재 유명 프랜차이즈, 고급호텔 뷔페에 납품되고 있는 제품으로 꼬리곰탕 또는 찜요리에 적합합니다.<br/>
                      수입산 냉동원육의 경우 비선호 기름층과 물이 다량으로 포햠되어 조리과정에서 50%가량의 Loss가 발생하는 반면,<br/>
                      정선과정에서 불필요한 부분을 제거하고 보일을 완료하여 추가적인 Loss없이 개봉 후 바로 조리가 가능하다는 장점을<br/>
                      가지고 있습니다.
                    </p>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_05/img2.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_05/img3.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_05/img4.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_05/img5.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 우건탕 상세 내용 */}
            {product.id === 4 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_04/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>우건탕</td>
                        <td>1박스 = 3kg / 5파우치</td>
                        <td>3kg</td>
                        <td>캐나다산</td>
                        <td>50,000</td>
                        <td>50,000 x 5 = 250,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      최상급 호주산,캐나다산 원육을 사용하여 국내에서 가공 생산한 제품입니다.<br/>
                      현재 프랜차이즈, 리조트, 웨딩 뷔페 등에 납품되고 있으며, 도가니탕 또는 수육 요리에 적합한 제품입니다.<br/>
                    </p>
                    <span>
                      호주산 원육은 스티어등급의 소를 사용하였고 가공시 3cm내외로 슬라이스 처리 후 멸균처리하여 개봉 후 바로 사용하기<br/>
                      유용합니다.<br/>
                    </span>
                    <span>
                      캐나다산 원육은 AA등급의 곡물비육한 소를 사용하였으며 호주산 원육보다 맛에서 우위에 있습니다.<br/>
                      슬라이스 처리하지않고 원료육 그대로의 형태로 가공하여 사용시 소비자의 니즈에 맞게 컷팅하여 사용가능합니다.
                    </span>
                  </div>
                </div>

                <div className="list">
                  <h3>- 호주산 우건탕</h3>
                  <ul>
                    <li>
                      <div className="clip-animation wow">
                        <img src="/img/sub/sub02/sub02_04/img2.jpg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="clip-animation wow">
                        <img src="/img/sub/sub02/sub02_04/img3.jpg" alt="" />
                      </div>
                    </li>
                  </ul>
                  <p>호주산 원육은 스티어등급의 소를 사용하였고 가공시 3cm 내외로 슬라이스 처리 후 멸균처리하여 개봉 후 바로 사용하기 유용합니다</p>
                </div>

                <div className="list">
                  <h3>- 캐나다산 우건탕</h3>
                  <ul>
                    <li>
                      <div className="clip-animation wow">
                        <img src="/img/sub/sub02/sub02_04/img4.jpg" alt="" />
                      </div>
                    </li>
                    <li>
                      <div className="clip-animation wow">
                        <img src="/img/sub/sub02/sub02_04/img5.jpg" alt="" />
                      </div>
                    </li>
                  </ul>
                  <p>캐나다산 원육은 AA등급의 곡물비육한 소를 사용하였으며 호주산 원육보다 맛에서 우위에 있습니다</p>
                  <p>슬라이스 처리하지 않고 원료육 그대로의 형태로 가공하여 사용시 소비자의 니즈에 맞게 컷팅하여 사용가능합니다.</p>
                </div>
              </>
            )}

            {/* 소고기탕 상세 내용 */}
            {product.id === 7 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_07/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>소고기탕</td>
                        <td>1박스 = 3kg / 6캔</td>
                        <td>1.5kg</td>
                        <td>인도산</td>
                        <td>32,000</td>
                        <td>32,000 x 6 = 192,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      지방을 제거한 엄선된 양지살을 사용한 제품입니다.<br/>
                      웨딩홀, 프랜차이즈, 가공업체등 업체별 용도에 맞게 사용이 가능한 제품이며,<br/>
                      일반적으로 육개장, 미역국, 무국, 장조림 등에 사용되며 식감이 매우 뛰어납니다.<br/>
                      장기간(36개월) 실온보관이 가능하여 편리하게 사용할 수 있습니다.
                    </p>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_07/img2.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_07/img3.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_07/img4.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_07/img5.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 냉동 자숙 갈비탕 상세 내용 */}
            {product.id === 9 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_09/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>냉동 자숙 갈비탕</td>
                        <td>1박스 = 3kg / 5트레이</td>
                        <td>갈비 12대</td>
                        <td>호주산</td>
                        <td>33,000</td>
                        <td>33,000 x 5 = 165,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      최상급 호주산 원육 GF(Grain Fed) 등급 소의 갈비를 사용한 제품입니다.<br/>
                      GF등급으로 부드럽고 맛이 뛰어난 장점을 가지고 있습니다.<br/>
                      갈빗대 사이즈를 하프컷팅하여 평균 10cm내외 로 작업하였으며, 1대의 평균 중량은 약 100~120g 입니다.<br/>
                      가공 시 기름 정선에 더욱 섬세하게 작업하여 해동 후 바로 조리하기 용이합니다.<br/>
                      포장 후 급속 냉동을 통하여 본연 그대로의 맛을 유지할 수 있도록 가공하였습니다.
                    </p>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_09/img2.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 냉동 자숙곱창 상세 내용 */}
            {product.id === 6 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_06/img1_1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>냉동 자숙곱창</td>
                        <td>1박스 = 2kg / 6팩</td>
                        <td>2kg</td>
                        <td>우루과이산</td>
                        <td>50,000</td>
                        <td>50,000 x 6 = 300,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      우루과이산 원육을 신선상태에서 세척, 보일(삶기)한 제품으로, 여타 수입산 냉동곱창과는 비교불가한 품질입니다.<br/>
                      소의 소장(Small Intestine - 약 16m내외)에서 알곱창(중심부분 1m)만을 사용하여 곱이 많고 씹을수록 특유의<br/>
                      고소함을 느낄 수 있습니다. 해동 후 바로 익혀서 드실 수 있으며, 구이 또는 전골요리에 적합한 제품입니다.<br/>
                      소곱창의 경우 부위의 특성상 가열 후 약 33%내외의 수율만을 얻을 수 있습니다.<br/>
                      당사 제품의 경우 이미 가열과정을 거쳐 추가 Loss가 없습니다.
                    </p>
                  </div>
                </div>

                <div className="list">
                  <h3>원육원산지 : 우루과이</h3>
                  <p>본 제품은 우루과이에서 수입하였으며, 신선한 곡물 비육된 냉동 원재료만을 사용하였습니다.</p>
                  <p>소의 소창(Small Intestine)의 전체 길이 약 16m 내외 중에서 중심부분 1m(알곱창)만을 사용하여 생산된 제품입니다.</p>
                  <p>중심부분의 1미터(알곱창)만을 사용하여 생산된 제품이므로 여타 호주산, 미국산등에 비하여 곱의 양이 많아 품질면에서 충분한 경쟁력을 가지고 있습니다.</p>
                </div>

                <div className="list">
                  <p>냉동 소고기의 경우 보일 가공시 일정 수율이 발생하는데, 소 곱창의 경우 냉동 상태에서 가열 후 약 33% 내외의 수율을 얻을 수 있습니다</p>
                  <p>원가 산출 사례</p>
                </div>

                <div className="list">
                  <ul>
                    <li>
                      <div className="clip-animation wow">
                        <img src="/img/sub/sub02/sub02_06/img2.jpg" alt="이미지" />
                      </div>
                    </li>
                    <li>
                      <div className="clip-animation wow">
                        <img src="/img/sub/sub02/sub02_06/img3.jpg" alt="이미지" />
                      </div>
                    </li>
                  </ul>
                  <p>우루과이 Grain-fed(곡물비육) 곱창을 현지 공장으로 입고하여 10~20cm 사이즈로 절단합니다</p>
                  <p>깨끗한 물로 핏물 및 불순물을 제거(3~4회 반복)하고 고온에서 초벌(Boil)합니다</p>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_06/img4.jpg" alt="이미지" />
                    </div>
                  </div>
                  <p>기름부분을 제거하고 정선하여 2kg씩 진공 포장후 급냉실에서 냉동합니다</p>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_06/img5.png" alt="이미지" />
                    </div>
                  </div>
                </div>

              </>
            )}

            {/* 스지 상세 내용 */}
            {product.id === 8 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_09/img1_1 (1).jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>냉동제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>스지(냉동자숙우건)</td>
                        <td>12kg / 12팩(박스)</td>
                        <td>1kg</td>
                        <td>호주산</td>
                        <td>17,000</td>
                        <td>17,000 x 12 = 204,000</td>
                      </tr>
                      <tr>
                        <td>스지(냉동자숙우건)</td>
                        <td>18kg / 6팩(박스)</td>
                        <td>3kg</td>
                        <td>호주산</td>
                        <td>48,000</td>
                        <td>48,000 x 6 = 288,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      우건탕에 사용 가능한 제품입니다.<br/>
                      알맞은 크기로 절단하여 포장되어 있어 원하는만큼 편리하게 사용 가능합니다.<br/>
                      원하는 재료를 추가하여 다양한 맛을 낼 수 있습니다.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* 갈비육수 상세 내용 */}
            {product.id === 10 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                
                <div className="sub_txt" style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.8' }}>
                  <p>갈비탕을 더욱 쉽고 간편하게 조리할 수 있도록<br/>
                  다림 탕육수베이스를 판매중입니다.</p>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_10/galbi-yuksu.jpg" alt="갈비육수" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>갈비육수</h3>
                  <div className="product_info" style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <p><strong>용도</strong> : 갈비탕 조리시</p>
                    <p><strong>조리방법</strong> : 1인분에 밥숟갈(20g) 양으로 맛을 조절하세요</p>
                    <p><strong>원료</strong> : 소고기, 닭고기, 대두, 밀, 우유 함유</p>
                    <p><strong>유통기한</strong> : 제조일로부터 12개월</p>
                    <p><strong>보관방법</strong> : 차광 실온 보관</p>
                  </div>
                  
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>사골육수</td>
                        <td>1박스 = 500g / 10팩</td>
                        <td>5kg</td>
                        <td>국내제조</td>
                        <td>2,800</td>
                        <td>2,800 x 10 = 28,000</td>
                      </tr>
                      <tr>
                        <td>사골육수</td>
                        <td>1박스 = 5kg / 2팩</td>
                        <td>10kg</td>
                        <td>국내제조</td>
                        <td>20,500</td>
                        <td>20,500 x 2 = 41,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                </div>
              </>
            )}

            {/* 우골농축액 상세 내용 */}
            {product.id === 11 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                
                <div className="sub_txt" style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.8' }}>
                  <p>설렁탕, 곰탕, 떡국, 만두국, 칼국수 등<br/>
                  국물요리에 적합한 우골농축액 입니다.</p>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_11/ugol-concentrate.jpg" alt="우골농축액" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>우골농축액</h3>
                  <div className="product_info" style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <p><strong>용도</strong></p>
                    <p style={{ marginLeft: '10px' }}>- 육개장, 설렁탕, 곰탕 등 각종 탕류 국물요리</p>
                    <p style={{ marginLeft: '10px' }}>- 부대찌개, 김치찌개 등 국종류 요리시</p>
                    <p style={{ marginLeft: '10px' }}>- 떡국, 만두국, 칼국수, 수제비 등 국물요리</p>
                    <p style={{ marginTop: '15px' }}><strong>조리방법</strong></p>
                    <p style={{ marginLeft: '10px' }}>- 1인분에 찻숟갈(5g)의 양으로 맛을 조절하세요</p>
                    <p style={{ marginLeft: '10px' }}>- 용도에 따라 50~100배 희석, 가열 후 섭취하세요</p>
                    <p style={{ marginTop: '15px' }}><strong>원료 및 함량</strong> : 우골농축액 88%, 정제염 12%(소고기함유)</p>
                    <p><strong>유통기한</strong> : 제조일로부터 12개월</p>
                    <p><strong>보관방법</strong> : 차광 실온 보관</p>
                  </div>
                  
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={6}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>사골육수</td>
                        <td>1박스 = 500g / 10팩</td>
                        <td>5kg</td>
                        <td>국내제조</td>
                        <td>2,800</td>
                        <td>2,800 x 10 = 28,000</td>
                      </tr>
                      <tr>
                        <td>사골육수</td>
                        <td>1박스 = 5kg / 2팩</td>
                        <td>10kg</td>
                        <td>국내제조</td>
                        <td>20,500</td>
                        <td>20,500 x 2 = 41,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* contents_detail end */}
      </div>
      {/* contents end */}

      <style jsx>{`
        /* 원본 스타일 유지 */
        .contents_detail .inner { padding: 0; margin: 0 auto; }
        .sub_txt { padding: 10px 0; }
        .sub_txt p { font-size: 18px; color: red; text-align: right; padding-right: 30px; }
        
        .sub_img { position: relative; margin-bottom: 30px; }
        .image_show_wrap { position: relative; width: 100%; overflow: hidden; }
        .image_show_wrap2 { position: relative; width: 100%; }
        .sub_img img { width: 100%; height: auto; display: block; }
        
        .chart { margin: 40px 0; }
        .chart span { display: block; text-align: right; font-size: 14px; color: #666; margin-bottom: 10px; }
        .chart table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .chart table th,
        .chart table td { padding: 12px; text-align: center; border: 1px solid #ddd; }
        .chart table th { background: #f5f5f5; font-weight: bold; color: #333; }
        .chart table td { background: #fff; }
        .chart > p { text-align: right; font-size: 14px; color: #666; margin-bottom: 20px; }
        .chart .tit p { font-size: 16px; line-height: 1.8; color: #555; text-align: left; }
        .chart .tit span { display: block; font-size: 16px; line-height: 1.8; color: #555; text-align: left; margin-top: 10px; }
        
        /* list 스타일 */
        .list { margin: 50px 0; }
        .list h3 { font-size: 20px; font-weight: bold; color: #333; margin-bottom: 20px; }
        .list ul { display: flex; gap: 20px; margin-bottom: 20px; list-style: none; padding: 0; }
        .list ul li { flex: 1; }
        .list img { width: 100%; height: auto; display: block; }
        .list p { font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-top: 20px; }
        
        /* YouTube 스타일 */
        .youtube { padding: 30px 0; }
        .youtube ul { display: flex; flex-wrap: nowrap; justify-content: space-between; gap: 40px; list-style: none; padding: 0; }
        .youtube ul li { width: 50%; text-align: center; }
        .youtube ul li p { font-size: 18px; color: #333; text-align: center; padding: 10px 0; }
        .youtube ul li .video_wrap { display: block; background-color: #000; }
        .youtube ul li .video_wrap .video { width: 100%; padding-top: 56.25%; height: 0; position: relative; overflow: hidden; margin: 0 auto; z-index: 0; }
        .youtube ul li .video_wrap .video iframe { position: absolute; top: -10%; left: -25%; width: 150%; height: 120%; }
        .youtube ul li .video_wrap .video::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: transparent; z-index: 9; }
        
        /* 반응형 */
        @media (max-width: 768px) {
          .sub_txt { font-size: 18px; padding: 15px 0; }
          .sub_txt p { font-size: 18px; }
          .chart table { font-size: 12px; }
          .chart table th,
          .chart table td { padding: 8px 4px; }
          .youtube ul { flex-direction: column; gap: 20px; }
          .youtube ul li { width: 100%; }
          .youtube ul li .video_wrap { max-width: 100%; }
          .youtube ul li .video_wrap .video iframe { width: 200%; height: 200%; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        }
      `}</style>
    </section>
  );
}