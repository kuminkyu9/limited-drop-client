import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

// 임시 이미지
import clockImg from '@/assets/images/clock.jpg';
import handbagImg from '@/assets/images/handbag.jpg';
import hoodieImg from '@/assets/images/hoodie.jpg';
import shoesImg from '@/assets/images/shoes.jpg';

const ProductDetail = () => {
  return (
    <div className="bg-white">
      {/* --- Navbar --- */}
      <Navbar search={() => {console.log('go search');}} />

      {/* 상품 정보 영역 */}
      <main className="w-full border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row">
          {/* 왼쪽: 큰 상품 이미지 + 작은 썸네일 3개 (가로로 배치) */}
          <div className="w-full lg:w-1/2">
            {/* 메인 사진 */}
            <div className="w-full bg-black overflow-hidden">
              <div className="aspect-square w-full"> 
                <img
                  src={clockImg}
                  alt="상품 메인"
                className="h-full w-full object-contain" 
                />
              </div>
            </div>
            {/* 썸네일 3개 */}
            <div className="mt-4 flex gap-4">
              <button className="relative aspect-4/5 w-1/3 overflow-hidden bg-black">
                <img
                  src={handbagImg}
                  alt="썸네일 1"
                  className="h-full w-full object-cover"
                />
              </button>
              <button className="relative aspect-4/5 w-1/3 overflow-hidden bg-black">
                <img
                  src={hoodieImg}
                  alt="썸네일 2"
                  className="h-full w-full object-cover"
                />
              </button>
              <button className="relative aspect-4/5 w-1/3 overflow-hidden bg-black">
                <img
                  src={shoesImg}
                  alt="썸네일 3"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* 오른쪽: 브랜드, 이름, 가격, 알림, 사이즈, 버튼 */}
          <div className="w-full lg:w-1/2">
            {/* 브랜드 */}
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gray-500">NIKE</p>
            {/* 상품명 */}
            <h1 className="text-2xl font-semibold leading-snug">
              Air Jordan 1 Retro High OG &quot;Chicago Lost and Found&quot;
            </h1>
            {/* 가격 */}
            <p className="mt-4 text-2xl font-bold">₩289,000</p>

            {/* 여러명이 보고 있을 경우 */}
            {/* <div className="mt-4 border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm font-semibold text-red-600">
                🔥 현재 24명이 이 상품을 보고 있습니다
              </p>
              <p className="mt-1 text-xs text-red-500">서둘러 구매하세요!</p>
            </div> */}
            
            {/* text */}
            <p className="mt-6 text-sm leading-6 text-gray-700">
              전설적인 디자인과 완벽한 복각으로 돌아온 시카고 컬러웨이.
              한정 수량으로 출시되며, 빈티지 무드의 디테일이 더해진
              에디션입니다.
            </p>
            {/* size */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold">사이즈 선택</p>
              <div className="grid grid-cols-4 gap-2 text-sm">
                {["250", "255", "260", "265", "270", "275", "280"].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 py-2 text-center hover:border-black cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
                <div className="hidden md:block" />
              </div>
            </div>
            {/* 버튼 */}
            <div className="mt-6 flex flex-col gap-3">
              <button className="flex h-12 items-center justify-center gap-2 border border-gray-300 px-6 text-sm font-medium transition-colors hover:bg-gray-50 cursor-pointer">
                <Heart className="h-4 w-4" /> 
                <span>찜하기</span>
              </button>
              <button className="flex h-12 items-center justify-center bg-red-500 text-sm font-semibold text-white hover:bg-red-600 cursor-pointer">
                빠른 구매하기 ⚡
              </button>
            </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <Footer />
        <div className='bg-black -mb-1'></div>
      </main>
    </div>
  );
};

export default ProductDetail;
