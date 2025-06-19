'use client';

export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">이미지 테스트 페이지</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">직접 img 태그 테스트:</h2>
          <img 
            src="/img/visual/slide1.jpg" 
            alt="테스트 이미지 1" 
            className="w-full max-w-md h-auto"
          />
        </div>
        
        <div>
          <h2 className="text-xl mb-2">Background image 테스트:</h2>
          <div 
            className="w-full max-w-md h-64 bg-cover bg-center border-2 border-red-500"
            style={{ backgroundImage: 'url(/img/visual/slide2.jpg)' }}
          >
            <p className="text-white bg-black bg-opacity-50 p-2">배경 이미지 테스트</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl mb-2">모든 슬라이드 이미지 목록:</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="border p-2">
                <p>slide{num}.jpg</p>
                <img 
                  src={`/img/visual/slide${num}.jpg`} 
                  alt={`슬라이드 ${num}`}
                  className="w-full h-32 object-cover"
                  onError={() => {
                    console.error(`이미지 로드 실패: slide${num}.jpg`);
                  }}
                  onLoad={() => {
                    console.log(`이미지 로드 성공: slide${num}.jpg`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}