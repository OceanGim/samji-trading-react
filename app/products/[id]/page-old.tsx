import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const productCategories = [
  { id: 1, name: '갈비탕', href: '/products/1' },
  { id: 2, name: '뼈없는갈비탕', href: '/products/2' },
  { id: 3, name: '뼈없는 참갈비찜', href: '/products/3' },
  { id: 4, name: '우건탕(도가니탕)', href: '/products/4' },
  { id: 5, name: '꼬리곰탕', href: '/products/5' },
  { id: 6, name: '냉동자숙곱창', href: '/products/6' },
  { id: 7, name: '소고기탕', href: '/products/7' },
  { id: 8, name: '냉동자숙우건(스지)', href: '/products/8' },
  { id: 9, name: '냉동자숙 갈비탕', href: '/products/9' },
  { id: 10, name: '소스', href: '/products/10' },
  { id: 11, name: '제품특장점', href: '/products/features' },
];

// 제품별 상세 정보 (원본 HTML과 동일)
const productDetails: Record<number, {
  title: string;
  desc: string;
  features: string[];
  origin: string;
  specification: string;
  packingUnit: string;
  storageMethod: string;
  shelfLife: string;
  cookingSteps: string[];
}> = {
  1: {
    title: '프리미엄 갈비탕',
    desc: '엄선된 프리미엄 갈비를 사용하여 진하고 깊은 맛을 자랑하는 삼지상사의 대표 제품입니다.',
    features: [
      '엄선된 프리미엄 갈비 사용',
      '24시간 이상 우려낸 진한 국물',
      'HACCP 인증 시설에서 위생적으로 생산',
      '간편한 조리로 전문점의 맛 재현'
    ],
    origin: '호주산 / 미국산 / 국내산',
    specification: '800g, 1kg, 1.5kg',
    packingUnit: '10팩/박스',
    storageMethod: '냉동보관 (-18℃ 이하)',
    shelfLife: '제조일로부터 12개월',
    cookingSteps: [
      '냉동된 제품을 냉장실에서 해동합니다.',
      '끓는 물에 제품을 넣고 10-15분간 중탕합니다.',
      '기호에 따라 파, 후추 등을 추가합니다.',
      '따뜻한 밥과 함께 드시면 됩니다.'
    ]
  }
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  const details = productDetails[parseInt(id)] || productDetails[1]; // 기본값으로 갈비탕 정보 사용

  if (!product) {
    notFound();
  }

  return (
    <section className={`sub02_${String(id).padStart(2, '0')} sub02`}>
      {/* contents start */}
      <div className="contents">
        {/* Tab Menu - 현재 디자인 유지 */}
        <div className="sticky top-[50px] z-40 bg-black/60 backdrop-blur-sm h-[60px] overflow-x-auto scrollbar-hide">
          <ul className="flex max-w-[1200px] mx-auto px-5 min-w-[800px] md:min-w-0">
            {productCategories.map((category) => (
              <li key={category.id} className="flex-1">
                <Link
                  href={category.href}
                  className={`block w-full h-[60px] leading-[60px] text-center text-white text-xs md:text-sm transition-all duration-300 hover:bg-[#002768] whitespace-nowrap px-1 md:px-2 ${
                    parseInt(id) === category.id ? 'bg-[#002768]' : ''
                  }`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="flex-1">
              <a href="#none" className="block w-full h-[60px]"></a>
            </li>
          </ul>
        </div>

        <div className="contents_title pt-[150px] mt-[60px] relative w-full overflow-hidden">
          <div className="inner max-w-[1200px] mx-auto px-5">
            <h2 className="py-[15px] text-[32px] text-[#333] text-left relative after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:bg-[#003625]">{product.name}</h2>
          </div>
        </div>

        {/* contents_detail start - 원본 HTML과 동일한 구조 */}
        <div className="contents_detail py-[30px]">
          <div className="inner max-w-[1200px] mx-auto px-5">
            <div className="product_main block mb-20 text-center">
              <div className="product_image text-center mb-[60px]">
                <div className="clip-animation wow inline-block">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-[600px] max-h-[500px] w-auto h-auto rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] block mx-auto"
                  />
                </div>
              </div>
              <div className="product_info text-center max-w-[800px] mx-auto">
                <h3 className="text-[36px] text-[#002768] mb-[30px] font-bold">{details.title}</h3>
                <p className="desc text-[20px] text-[#333] leading-[1.8] mb-[40px] px-5 whitespace-pre-line">
                  {details.desc}
                </p>
                <div className="features bg-[#f8f9fa] p-[40px] rounded-[10px] mb-[30px]">
                  <h4 className="text-[24px] text-[#002768] mb-[25px] font-bold">제품 특징</h4>
                  <ul className="list-none p-0">
                    {details.features.map((feature, index) => (
                      <li key={index} className="text-[18px] text-[#555] py-[10px] relative pl-[25px] before:content-['✓'] before:absolute before:left-0 before:text-[#008eda] before:font-bold">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="origin bg-[#002768] text-white p-[30px] rounded-[10px] inline-block">
                  <h4 className="text-[20px] mb-[10px]">원산지</h4>
                  <p className="text-[18px] m-0">{details.origin}</p>
                </div>
              </div>
            </div>
            
            <div className="product_detail mb-[60px] text-center">
              <h3 className="text-[28px] text-[#002768] mb-[30px] text-center font-bold">제품 상세 정보</h3>
              <table className="product_table w-full max-w-[960px] mx-auto border-collapse shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                <tbody>
                  <tr>
                    <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">제품명</th>
                    <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">{details.title}</td>
                  </tr>
                  <tr>
                    <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">규격</th>
                    <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">{details.specification}</td>
                  </tr>
                  <tr>
                    <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">포장단위</th>
                    <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">{details.packingUnit}</td>
                  </tr>
                  <tr>
                    <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">보관방법</th>
                    <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">{details.storageMethod}</td>
                  </tr>
                  <tr>
                    <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">유통기한</th>
                    <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">{details.shelfLife}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="cooking_info bg-[#f8f9fa] p-[60px] rounded-[10px] text-center">
              <h3 className="text-[28px] text-[#002768] mb-[30px] font-bold">조리방법</h3>
              <ol className="max-w-[600px] mx-auto text-left pl-5 list-decimal">
                {details.cookingSteps.map((step, index) => (
                  <li key={index} className="text-[18px] text-[#555] leading-[1.8] mb-5 pl-[10px]">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {/* contents_detail end */}
      </div>
      {/* contents end */}
    </section>
  );
}