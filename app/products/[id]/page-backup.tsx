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

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Tab Menu - 원본 스타일 유지 */}
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
          {/* Empty tab to match original */}
          <li className="flex-1">
            <a href="#none" className="block w-full h-[60px]"></a>
          </li>
        </ul>
      </div>

      {/* Contents Title */}
      <div className="pt-[100px] md:pt-[150px] mt-[60px] relative w-full overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="py-[15px] text-[24px] md:text-[28px] lg:text-[32px] text-[#333] text-left relative after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:bg-[#003625]">
            {product.name}
          </h2>
        </div>
      </div>

      {/* Contents Detail */}
      <div className="py-[30px]">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Product Main */}
          <div className="block mb-20 text-center">
            {/* Product Image - 원본과 동일한 스타일 */}
            <div className="text-center mb-[60px]">
              <div className="clip-animation wow inline-block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[600px] max-h-[500px] w-auto h-auto rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] block mx-auto"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center max-w-[800px] mx-auto">
              <h3 className="text-[36px] text-[#002768] mb-[30px] font-bold">
                프리미엄 {product.name}
              </h3>
              <p className="text-[20px] text-[#333] leading-[1.8] mb-[40px] px-5">
                {product.description}
              </p>

              {/* Features */}
              {product.features && (
                <div className="bg-[#f8f9fa] p-[40px] rounded-[10px] mb-[30px]">
                  <h4 className="text-[24px] text-[#002768] mb-[25px] font-bold">
                    제품 특징
                  </h4>
                  <ul className="list-none p-0">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-[18px] text-[#555] py-[10px] relative pl-[25px] before:content-['✓'] before:absolute before:left-0 before:text-[#008eda] before:font-bold"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Origin */}
              {product.origin && (
                <div className="bg-[#002768] text-white p-[30px] rounded-[10px] inline-block">
                  <h4 className="text-[20px] mb-[10px]">원산지</h4>
                  <p className="text-[18px] m-0">{product.origin}</p>
                </div>
              )}
            </div>
          </div>

          {/* Product Detail Table */}
          {(product.specification || product.packingUnit || product.storageMethod || product.shelfLife) && (
            <div className="mb-[60px] text-center">
              <h3 className="text-[28px] text-[#002768] mb-[30px] text-center font-bold">
                제품 상세 정보
              </h3>
              <table className="w-full max-w-[960px] mx-auto border-collapse shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                <tbody>
                  <tr>
                    <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">
                      제품명
                    </th>
                    <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">
                      프리미엄 {product.name}
                    </td>
                  </tr>
                  {product.specification && (
                    <tr>
                      <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">
                        규격
                      </th>
                      <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">
                        {product.specification}
                      </td>
                    </tr>
                  )}
                  {product.packingUnit && (
                    <tr>
                      <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">
                        포장단위
                      </th>
                      <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">
                        {product.packingUnit}
                      </td>
                    </tr>
                  )}
                  {product.storageMethod && (
                    <tr>
                      <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">
                        보관방법
                      </th>
                      <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">
                        {product.storageMethod}
                      </td>
                    </tr>
                  )}
                  {product.shelfLife && (
                    <tr>
                      <th className="p-5 text-center border border-[#ddd] text-base bg-[#002768] text-white font-bold w-[30%]">
                        유통기한
                      </th>
                      <td className="p-5 text-center border border-[#ddd] text-base bg-white text-[#333]">
                        {product.shelfLife}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Cooking Instructions */}
          {product.cookingInstructions && (
            <div className="bg-[#f8f9fa] p-[60px] rounded-[10px] text-center">
              <h3 className="text-[28px] text-[#002768] mb-[30px] font-bold">
                조리 방법
              </h3>
              <ol className="max-w-[600px] mx-auto text-left pl-5">
                {product.cookingInstructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-[18px] text-[#555] leading-[1.8] mb-5 pl-[10px]"
                  >
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center py-10">
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#002768] text-white rounded-lg hover:bg-[#001a4a] transition-colors"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
}