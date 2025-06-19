export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: '갈비탕',
    description: '엄선된 갈비를 자숙 처리하여 만든 간편하게 즐기는 프리미엄 갈비탕',
    image: '/img/slide/img1.jpg',
    category: '탕류'
  },
  {
    id: 2,
    name: '뼈없는갈비탕',
    description: '번거로운 뼈를 제거하여 부드러운 살코기만을 담은 깔끔한 갈비탕',
    image: '/img/slide/img2.jpg',
    category: '탕류'
  },
  {
    id: 3,
    name: '뼈없는 참갈비찜',
    description: '프리미엄 갈비살을 부드럽게 찜으로 요리한 고급 갈비찜',
    image: '/img/slide/img3.jpg',
    category: '찜류'
  },
  {
    id: 4,
    name: '우건탕(도가니탕)',
    description: '쫄깃한 힘줄과 부드러운 살코기가 어우러진 영양만점 도가니탕',
    image: '/img/slide/img4.jpg',
    category: '탕류'
  },
  {
    id: 5,
    name: '꼬리곰탕',
    description: '진한 국물 맛이 일품인 영양 가득한 꼬리곰탕',
    image: '/img/slide/img5.jpg',
    category: '탕류'
  },
  {
    id: 6,
    name: '냉동자숙곱창',
    description: '신선한 곱창을 깨끗이 손질하여 자숙 처리한 쫄깃한 곱창',
    image: '/img/slide/img6.jpg',
    category: '특수부위'
  },
  {
    id: 7,
    name: '소고기탕',
    description: '진한 사골 육수에 부드러운 소고기를 듬뿍 담은 영양 가득한 소고기탕',
    image: '/img/slide/img7.jpg',
    category: '탕류'
  },
  {
    id: 8,
    name: '냉동자숙우건(스지)',
    description: '쫄깃한 식감이 일품인 고품질 우건(스지) 제품',
    image: '/img/slide/img8.jpg',
    category: '특수부위'
  },
  {
    id: 9,
    name: '냉동자숙 갈비탕',
    description: '간편하게 데워먹는 자숙 처리된 갈비탕',
    image: '/img/slide/img9.jpg',
    category: '탕류'
  },
  {
    id: 10,
    name: '갈비육수',
    description: '갈비탕을 더욱 쉽고 간편하게 조리할 수 있도록 만든 탕육수베이스',
    image: '/img/sub/sub02/sub02_10/img1.jpg',
    category: '소스'
  },
  {
    id: 11,
    name: '우골농축액',
    description: '설렁탕, 곰탕, 떡국, 만두국, 칼국수 등 국물요리에 적합한 우골농축액',
    image: '/img/slide/img10.jpg',
    category: '소스'
  }
];