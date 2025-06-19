import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 실제 제품 카테고리만 표시
const categories = [
  { id: 'all', name: '전체', count: products.length, href: '/products' },
  { id: '탕류', name: '탕류', count: products.filter(p => p.category === '탕류').length, href: '/products' },
  { id: '찜류', name: '찜류', count: products.filter(p => p.category === '찜류').length, href: '/products' },
  { id: '특수부위', name: '특수부위', count: products.filter(p => p.category === '특수부위').length, href: '/products' },
  { id: '소스', name: '소스', count: products.filter(p => p.category === '소스').length, href: '/products' },
  { id: 'features', name: '제품특장점', count: 0, href: '/products/features' },
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Sticky Tab Menu - 원본 사이트 스타일 */}
      <div className="sticky top-[50px] z-40 bg-black/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-[1400px] mx-auto">
          <ul className="flex">
            {categories.map((category) => (
              <li key={category.id} className="flex-1 relative">
                <Link
                  href={category.href}
                  className={`relative block w-full py-8 text-center text-white transition-all duration-300 text-base lg:text-lg font-medium hover:bg-white/10`}
                >
                  {category.name}
                  {category.count > 0 && (
                    <span className="ml-2 text-sm opacity-80">({category.count})</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>메인으로 돌아가기</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg">
              {product.category}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">카테고리:</span>
                <span className="text-gray-600">{product.category}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">제품번호:</span>
                <span className="text-gray-600">SJ-{String(product.id).padStart(3, '0')}</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-3">주요 특징</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  엄선된 원료만을 사용한 프리미엄 제품
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  위생적인 가공 시설에서 생산
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  냉동 보관으로 신선도 유지
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  간편한 조리로 맛있게 즐기기
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href="tel:010-9999-3436"
                className="flex-1 bg-primary text-white text-center py-4 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                문의하기
              </a>
              <Link
                href="/products"
                className="flex-1 border-2 border-primary text-primary text-center py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                제품 목록
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-bold mb-6">조리 방법</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="space-y-3 text-gray-600">
              <li className="flex">
                <span className="font-semibold text-primary mr-3">1.</span>
                냉동 상태의 제품을 냉장실에서 해동하거나 찬물에 담가 해동합니다.
              </li>
              <li className="flex">
                <span className="font-semibold text-primary mr-3">2.</span>
                끓는 물에 제품을 넣고 중불에서 10-15분간 데웁니다.
              </li>
              <li className="flex">
                <span className="font-semibold text-primary mr-3">3.</span>
                기호에 맞게 파, 마늘 등의 양념을 추가하여 드시면 더욱 맛있습니다.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}