# Product Catalog Update - 2024년 6월 23일

## 작업 요약
삼지상사 React 웹사이트의 제품 카탈로그 디자인을 전면 개편했습니다.

## 주요 변경사항

### 1. 디자인 변경
- **이전**: 단일 카탈로그 이미지 표시
- **변경**: 개별 제품 카드 형태로 전환
- **참고 디자인**: 제공된 이미지를 기반으로 구현

### 2. 제품 카드 디자인 특징
- **헤더**: 
  - 빨간색 그라데이션 배경 (#C41E3A → #D91E36 → #EF4444)
  - 빛나는 애니메이션 효과 (shine animation)
  - 제품명 가운데 정렬
  - 굵은 폰트 (font-black)
  
- **여백**: 
  - 매우 넉넉한 패딩 (최대 50px)
  - 섹션 간 충분한 간격
  - 프리미엄 카탈로그 느낌

- **이미지**:
  - 두 개 이미지에서 단일 이미지로 변경
  - 1100x458 크기로 리사이징된 이미지 사용
  - 가운데 정렬 및 반응형 크기

- **테이블**:
  - 검은색 헤더, 회색 데이터 행
  - 넉넉한 셀 패딩
  - 중앙 정렬된 텍스트

- **가격 표시**:
  - "납품판매가(원)" - 빨간색
  - 금액 계산식 - 검정색
  - 여러 줄 가격 정보 지원 (스지, 소스)

### 3. 반응형 디자인
- 모든 화면에서 2열 그리드 유지
- 화면 크기에 따른 단계적 폰트/패딩 조정
- 모바일 최적화

### 4. 제품 데이터 구조
```typescript
interface Product {
  id: number;
  name: string;
  specs: string;
  content: string;
  origin: string;
  unitPrice: number;
  minQuantity: number;
  totalPrice: string;
  image: string; // 변경: images 객체에서 단일 image로
  bgColor?: string;
}
```

### 5. 이미지 업데이트
- 위치: `/public/img/products/single/`
- 제공된 이미지 파일:
  - galbitang.jpg (갈비탕)
  - boneless-galbitang.jpg (뼈없는 갈비탕)
  - galbijjim.jpg (뼈없는 참갈비찜)
  - ugeontang.jpg (우건탕)
  - korigomtang.jpg (꼬리곰탕)
  - gopchang.jpg (냉동 자숙곱창)
  - sogogitang.jpg (소고기탕)
  - suji.jpg (냉동 자숙우건)
  - frozen-galbitang.jpg (냉동 자숙 갈비탕)
  - sauce.jpg (소스)

### 6. 기술적 구현
- Tailwind CSS 활용
- 커스텀 애니메이션 추가 (tailwind.config.ts)
- 반응형 클래스 체계적 적용

## 파일 변경 내역
1. `/components/home/ProductCatalogWeb.tsx` - 전면 수정
2. `/app/page.tsx` - ProductCatalogWeb 컴포넌트 사용
3. `/tailwind.config.ts` - shine 애니메이션 추가

## 향후 개선사항
- 이미지 최적화 (WebP 변환 고려)
- 로딩 상태 추가
- 제품 필터링/검색 기능
- 상세 페이지 연결

## 커밋 정보
- 작업일: 2024년 6월 23일
- PM 에이전트에 의해 수행됨
- CTO 요청사항 반영 완료