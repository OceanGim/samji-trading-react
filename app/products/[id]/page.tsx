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
              </>
            )}

            {/* 뼈없는 갈비탕 상세 내용 */}
            {product.id === 2 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_02/img1.jpg" alt="이미지" />
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
                      <img src="/img/sub/sub02/sub02_02/img2.jpg" alt="이미지" />
                    </div>
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
                      <img src="/img/sub/sub02/sub02_03/img1.jpg" alt="이미지" />
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
                      <img src="/img/sub/sub02/sub02_03/img2.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_03/img3.jpg" alt="이미지" />
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
                      <img src="/img/sub/sub02/sub02_04/img1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={7}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>용도</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>우건탕</td>
                        <td>1박스 = 3kg / 6캔</td>
                        <td>500g</td>
                        <td>인도산</td>
                        <td>1인분</td>
                        <td>11,000</td>
                        <td>11,000 x 6 = 66,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      우건탕에 사용 가능한 제품입니다.<br/>
                      대형 프랜차이즈, 웨딩홀, 가공업체등에서 업체별 용도에 맞게 사용 가능합니다.<br/>
                      장기간(36개월) 실온보관이 가능하여 편리하게 사용할 수 있습니다.
                    </p>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_04/img2.jpg" alt="이미지" />
                    </div>
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
                      <img src="/img/sub/sub02/sub02_05/img1.jpg" alt="이미지" />
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
                        <td>1박스 = 3kg / 6캔</td>
                        <td>500g</td>
                        <td>호주산</td>
                        <td>11,000</td>
                        <td>11,000 x 6 = 66,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      꼬리곰탕에 사용 가능한 제품입니다.<br/>
                      대형 프랜차이즈, 웨딩홀, 가공업체등에서 업체별 용도에 맞게 사용 가능합니다.<br/>
                      장기간(36개월) 실온보관이 가능하여 편리하게 사용할 수 있습니다.
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
              </>
            )}

            {/* 소고기탕 상세 내용 */}
            {product.id === 6 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_06/img1.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <span>(단위 : 원, VAT포함)</span>
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan={7}>상온제품</th>
                      </tr>
                      <tr>
                        <th>제품명</th>
                        <th>규격</th>
                        <th>내용량</th>
                        <th>원산지</th>
                        <th>용도</th>
                        <th>단가</th>
                        <th>납품 판매가(원)</th>
                      </tr>
                      <tr>
                        <td>소고기탕</td>
                        <td>1박스 = 3kg / 6캔</td>
                        <td>500g</td>
                        <td>호주산</td>
                        <td>1인분</td>
                        <td>10,500</td>
                        <td>10,500 x 6 = 63,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      소고기탕에 사용 가능한 제품입니다.<br/>
                      대형 프랜차이즈, 웨딩홀, 가공업체등에서 업체별 용도에 맞게 사용 가능합니다.<br/>
                      장기간(36개월) 실온보관이 가능하여 편리하게 사용할 수 있습니다.
                    </p>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_06/img2.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 냉동 자숙 갈비탕 상세 내용 */}
            {product.id === 7 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_07/img1.jpg" alt="이미지" />
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
                        <td>냉동 자숙 갈비탕</td>
                        <td>11.88kg / 12팩 (박스)</td>
                        <td>990g</td>
                        <td>호주산</td>
                        <td>19,000</td>
                        <td>19,000 x 12 = 228,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      갈비탕 또는 찜 요리에 사용 가능한 제품입니다.<br/>
                      대형 프랜차이즈, 웨딩홀, 가공업체등에서 업체별 용도에 맞게 사용 가능합니다.<br/>
                      원하는 재료를 추가하여 다양한 맛을 낼 수 있습니다.
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
              </>
            )}

            {/* 냉동 자숙곱창 상세 내용 */}
            {product.id === 8 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_08/img1.jpg" alt="이미지" />
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
                        <td>냉동자숙곱창</td>
                        <td>10kg / 10팩(박스)</td>
                        <td>1kg</td>
                        <td>호주산</td>
                        <td>24,000</td>
                        <td>24,000 x 10 = 240,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>택배운송료 포함가</p>
                  <div className="tit">
                    <p>
                      곱창전골이나 곱창찌개등 다양한 음식에 사용 가능한 제품입니다.<br/>
                      밀가루, 소금물로 양념장을 제거하고 체에 받쳐 물기를 제거하여 사용합니다.<br/>
                      알맞은 크기로 절단하여 포장되어 있어 원하는만큼 편리하게 사용 가능합니다.
                    </p>
                  </div>
                </div>

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_08/img2.jpg" alt="이미지" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 스지 상세 내용 */}
            {product.id === 9 && (
              <>
                <div className="sub_txt"><p>2025년 3월 현재가</p></div>
                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_09/img1.jpg" alt="이미지" />
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

                <div className="sub_img">
                  <div className="image_show_wrap wow show_img01">
                    <div className="image_show_wrap2 wow show_img02">
                      <img src="/img/sub/sub02/sub02_09/img2.jpg" alt="이미지" />
                    </div>
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
        .sub_txt { text-align: center; font-size: 24px; color: #333; padding: 20px 0; font-weight: bold; margin-bottom: 50px; font-family: "Noto Sans KR", sans-serif; line-height: 1.4; }
        .sub_txt p { font-size: 24px; color: #333; }
        
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
        
        /* 반응형 */
        @media (max-width: 768px) {
          .sub_txt { font-size: 18px; padding: 15px 0; }
          .sub_txt p { font-size: 18px; }
          .chart table { font-size: 12px; }
          .chart table th,
          .chart table td { padding: 8px 4px; }
        }
      `}</style>
    </section>
  );
}