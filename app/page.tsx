import HeroSlider from '@/components/home/HeroSlider';
import ProductGrid from '@/components/home/ProductGrid';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />

      {/* Product Section */}
      <ProductGrid />

      {/* Company Info Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">
              삼지상사총판
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              삼지상사총판은 최고 품질의 축산물 가공품을 수입하여 
              전국의 식당과 업체에 공급하고 있습니다. 
              신뢰할 수 있는 파트너로서 항상 최선을 다하겠습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
