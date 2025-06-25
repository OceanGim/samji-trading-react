import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: '문의하기 - 삼지상사총판',
  description: '삼지상사총판 제품 문의 및 사업 제안. 전화: 010-9999-3436',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#002768] to-[#001a44] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-white text-center mb-6 korean-content drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            문의하기
          </h1>
          <p className="text-xl md:text-2xl text-white text-center max-w-3xl mx-auto font-medium leading-relaxed">
            궁금하신 사항이나 견적 문의는 언제든지 연락주시면<br />
            친절히 상담해드리겠습니다
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">연락처 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">회사명</h3>
                    <p className="text-gray-600">삼지상사총판</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">전화번호</h3>
                    <a href="tel:010-9999-3436" className="text-primary hover:text-primary-dark transition-colors text-lg font-medium">
                      010-9999-3436
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">주소</h3>
                    <p className="text-gray-600">
                      의정부시 고산동 996-3<br />
                      고산한강 듀클래스 B동 923호
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">영업시간</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>평일: 09:00 - 18:00</p>
                      <p>토요일: 09:00 - 13:00</p>
                      <p>일요일/공휴일: 휴무</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <div className="bg-gradient-to-r from-[#002768] to-[#001a44] p-8 rounded-xl text-center shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">빠른 상담이 필요하신가요?</h3>
                  <p className="text-white mb-6 text-lg">
                    전화로 바로 상담 가능합니다. 언제든지 연락주세요!
                  </p>
                  <a
                    href="tel:010-9999-3436"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#002768] hover:bg-gray-50 font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="text-lg">010-9999-3436</span>
                  </a>
                  <p className="text-white text-sm mt-4 font-medium">
                    대표: 박휘순
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}