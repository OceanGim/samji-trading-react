'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  specs: string;
  content: string;
  origin: string;
  unitPrice: number;
  minQuantity: number;
  totalPrice: string;
  image: string;
  bgColor?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: '갈비탕(캔)',
    specs: '1박스=3kg / 6캔',
    content: '1.5kg',
    origin: '인도',
    unitPrice: 28000,
    minQuantity: 6,
    totalPrice: '28,000×6=168,000',
    image: '/img/products/single/galbitang.jpg'
  },
  {
    id: 2,
    name: '뼈없는 갈비탕(캔)',
    specs: '1박스=3kg / 6캔',
    content: '1.5kg',
    origin: '인도',
    unitPrice: 30000,
    minQuantity: 6,
    totalPrice: '30,000×6=180,000',
    image: '/img/products/single/boneless-galbitang.jpg'
  },
  {
    id: 3,
    name: '뼈없는 참갈비찜',
    specs: '1박스=3kg / 8팩',
    content: '1.5kg',
    origin: '인도',
    unitPrice: 30000,
    minQuantity: 8,
    totalPrice: '30,000×8=240,000',
    image: '/img/products/single/galbijjim.jpg'
  },
  {
    id: 4,
    name: '우건탕',
    specs: '1박스=3kg / 5팩',
    content: '3kg',
    origin: '캐나다',
    unitPrice: 50000,
    minQuantity: 5,
    totalPrice: '50,000×5=250,000',
    image: '/img/products/single/ugeontang.jpg'
  },
  {
    id: 5,
    name: '꼬리곰탕(캔)',
    specs: '1박스=3kg / 5팩',
    content: '1.7kg',
    origin: '러시아',
    unitPrice: 44000,
    minQuantity: 5,
    totalPrice: '44,000×5=220,000',
    image: '/img/products/single/korigomtang.jpg'
  },
  {
    id: 6,
    name: '냉동 자숙곱창',
    specs: '1박스 = 2kg / 6팩',
    content: '2kg',
    origin: '우루과이',
    unitPrice: 50000,
    minQuantity: 6,
    totalPrice: '50,000×6=300,000',
    image: '/img/products/single/gopchang.jpg',
    bgColor: 'bg-white'
  },
  {
    id: 7,
    name: '소고기탕(캔)',
    specs: '1박스=3kg / 6캔',
    content: '1.5kg',
    origin: '인도',
    unitPrice: 32000,
    minQuantity: 6,
    totalPrice: '32,000×6=192,000',
    image: '/img/products/single/sogogitang.jpg'
  },
  {
    id: 8,
    name: '냉동 자숙우건(스지)',
    specs: '1박스=2kg / 6팩',
    content: '2kg',
    origin: '미국/캐나다',
    unitPrice: 56000,
    minQuantity: 6,
    totalPrice: '앞스지 56,000×6=336,000\n뒷스지 54,000×6=324,000',
    image: '/img/products/single/suji.jpg',
    bgColor: 'bg-white'
  },
  {
    id: 9,
    name: '냉동 자숙 갈비탕',
    specs: '1박스=3kg/5트레이',
    content: '갈비12대',
    origin: '호주',
    unitPrice: 33000,
    minQuantity: 5,
    totalPrice: '33,000×5=165,000',
    image: '/img/products/single/frozen-galbitang.jpg'
  },
  {
    id: 10,
    name: '소스',
    specs: '다양한 규격',
    content: '5kg/10kg',
    origin: '국내제조/몽골',
    unitPrice: 2800,
    minQuantity: 10,
    totalPrice: '사골곰탕 500g/10팩 2,800×10=28,000\n사골곰탕 5kg/2팩 20,500×2=41,000\n우골농축액 1kg/10팩 10,000×10=100,000',
    image: '/img/products/single/sauce.jpg'
  }
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="w-full">
      <div 
        className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg lg:shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        onClick={handleClick}
      >
      {/* Product Title - 반응형 패딩의 빨간색 헤더 with gradient */}
      <div className="bg-gradient-to-r from-[#C41E3A] via-[#D91E36] to-[#EF4444] relative overflow-hidden">
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full animate-[shine_3s_infinite]" />
        <div className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 relative">
          <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[28px] font-black text-white tracking-[-0.5px] text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            {product.name}
          </h3>
        </div>
      </div>
      
      {/* Product Content - 반응형 내부 여백 */}
      <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-[50px] xl:py-[45px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)]">
        {/* Product Image - 단일 이미지로 변경 */}
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex justify-center">
          <div className="relative bg-gray-50 rounded-md sm:rounded-lg lg:rounded-xl overflow-hidden border border-[#e8e8e8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] p-4 sm:p-6 md:p-8">
            <img 
              src={product.image} 
              alt={`${product.name}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Product Info Table - 반응형 테이블 */}
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-[35px] overflow-x-auto">
          <table className="w-full text-[10px] sm:text-xs md:text-sm lg:text-[14px] border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 lg:py-[14px] text-center font-medium text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] tracking-[-0.3px] whitespace-nowrap">제품명</th>
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 lg:py-[14px] text-center font-medium text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] tracking-[-0.3px] whitespace-nowrap">규격</th>
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 lg:py-[14px] text-center font-medium text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] tracking-[-0.3px] whitespace-nowrap">내용량</th>
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 lg:py-[14px] text-center font-medium text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] tracking-[-0.3px] whitespace-nowrap">원산지</th>
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-3 lg:py-[14px] text-center font-medium text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] tracking-[-0.3px] whitespace-nowrap">단가</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#f8f8f8]">
                <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-[18px] text-center font-semibold text-[#333] border-b border-[#e5e5e5] text-[9px] sm:text-[10px] md:text-xs lg:text-sm">{product.name.replace('(캔)', '').replace('(스지)', '')}</td>
                <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-[18px] text-center text-[#333] border-b border-[#e5e5e5] text-[9px] sm:text-[10px] md:text-xs lg:text-sm">{product.specs}</td>
                <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-[18px] text-center text-[#333] border-b border-[#e5e5e5] text-[9px] sm:text-[10px] md:text-xs lg:text-sm">{product.content}</td>
                <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-[18px] text-center text-[#333] border-b border-[#e5e5e5] text-[9px] sm:text-[10px] md:text-xs lg:text-sm">{product.origin}</td>
                <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-[18px] text-center font-bold text-black border-b border-[#e5e5e5] text-[9px] sm:text-[10px] md:text-xs lg:text-sm">{product.unitPrice.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Price Info - 반응형 여백과 텍스트 크기 */}
        <div className="pt-4 mt-4 sm:pt-6 sm:mt-6 md:pt-8 md:mt-8 lg:pt-[30px] lg:mt-[30px] border-t-2 border-[#e8e8e8] text-center">
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[26px] font-black tracking-[-0.5px]">
            <span className="text-[#D91E36]">납품판매가(원)</span>
            {product.totalPrice.includes('\n') ? (
              <span className="text-black block mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                {product.totalPrice.split('\n').map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </span>
            ) : (
              <span className="text-black ml-1">{product.totalPrice}</span>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

const ProductCatalogWeb: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid - 카드 간 좁은 간격, 그리드 자체에 추가 패딩 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-3 sm:gap-y-6 md:gap-x-4 md:gap-y-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div style={{height: '60px'}}></div>

        {/* Jinchobang Banner */}
        <div className="max-w-6xl mx-auto">
          <a 
            href="http://jinchobang.co.kr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden hover:opacity-95 transition-opacity duration-300"
          >
            <img 
              src="/img/jinchobang-banner.png" 
              alt="진초방 흑염소 - 흑염소 전문유통(몽골산) 도소매 납품 및 대량구매문의" 
              className="w-full h-auto"
            />
          </a>
        </div>

        {/* Spacing */}
        <div style={{height: '30px'}}></div>

        {/* Price Table */}
        <div className="max-w-6xl mx-auto">
          <JinchobangPriceTable />
        </div>

        {/* Spacing */}
        <div style={{height: '80px'}}></div>

      </div>
    </section>
  );
};

const JinchobangPriceTable: React.FC = () => {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src="/img/jinchobang-price-table-new.png" 
        alt="진초방 가격표" 
        className="w-full h-auto"
      />
    </div>
  );
};

export default ProductCatalogWeb;