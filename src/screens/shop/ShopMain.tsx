import Navbar from '@/components/Navbar';
import ShopTab from '@/screens/shop/ShopTab';
import Footer from '@/components/Footer';
import { useState } from "react";
import FCFSCard from '@/screens/card/FCFSCard';
import { type TmpFCFSCardProps } from '@/screens/card/FCFSCard';

// 임시 이미지
import shoesImg from '@/assets/images/shoes.jpg';

const products: TmpFCFSCardProps[] = [
  { id: 1, img: shoesImg, brand: "NIKE", name: "한정판 스니커즈 컬렉션 1", price: 250000, progress: 100, stock: "15/100" },
  { id: 2, img: shoesImg, brand: "ADIDAS", name: "한정판 스니커즈 컬렉션 2", price: 260000, progress: 92, stock: "15/100" },
  { id: 3, img: shoesImg, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 3", price: 270000, progress: 84, stock: "15/100" },
  { id: 4, img: shoesImg, brand: "NIKE", name: "한정판 스니커즈 컬렉션 4", price: 280000, progress: 76, stock: "15/100" },
  { id: 5, img: shoesImg, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 5", price: 290000, progress: 68, stock: "15/100" },
  { id: 6, img: shoesImg, brand: "NIKE", name: "한정판 스니커즈 컬렉션 6", price: 300000, progress: 60, stock: "15/100" },
  { id: 7, img: shoesImg, brand: "ADIDAS", name: "한정판 스니커즈 컬렉션 7", price: 310000, progress: 52, stock: "15/100" },
  { id: 8, img: shoesImg, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 8", price: 320000, progress: 44, stock: "15/100" },
  { id: 9, img: shoesImg, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 9", price: 330000, progress: 36, stock: "15/100" },
  { id: 10, img: shoesImg, brand: "NIKE", name: "한정판 스니커즈 컬렉션 10", price: 340000, progress: 28, stock: "15/100" },
  { id: 11, img: shoesImg, brand: "ADIDAS", name: "한정판 스니커즈 컬렉션 11", price: 350000, progress: 20, stock: "15/100" },
  { id: 12, img: shoesImg, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 12", price: 360000, progress: 12, stock: "15/100" },
];

const ShopMain = () => {
  const [tab, setTab] = useState<"firstCome" | "raffle" | "normal">("firstCome");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-100 border-b border-gray-200 bg-white">
        {/* --- Navbar --- */}
        <Navbar search={() => {console.log('go search');}} />

        {/* 상단 필터 탭 */}
        <ShopTab value={tab} onChange={setTab} />
      </header>

      {/* 메인 컨텐츠: 상품 그리드 + 페이지네이션 */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item, idx) => (
            <div key={idx}>
              <FCFSCard 
                img={item.img} 
                brand={item.brand} 
                name={item.name} 
                price={item.price} 
                stock={item.stock} 
                progress={item.progress} 
                isSoldOut={item.isSoldOut} 
                click={() => console.log('tmp')}
              />
            </div>
          ))}
        </section>

        {/* 페이지네이션 */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm">
          <button className="px-4 py-2 text-gray-500 hover:text-black">
            이전
          </button>

          <button className="h-9 w-9 border border-gray-200 text-gray-700 hover:bg-gray-50">
            1
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            4
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            5
          </button>

          <button className="px-4 py-2 text-gray-500 hover:text-black">
            다음
          </button>
        </div>
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default ShopMain;
