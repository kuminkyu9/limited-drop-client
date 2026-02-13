import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RaffleCard, { type TmpHotRaffleItem } from '@/screens/card/RaffleCard';
import FCFSCard, { type TmpFCFSCardProps } from '@/screens/card/FCFSCard';


// 임시 이미지
import clockImg from '@/assets/images/clock.jpg';
import handbagImg from '@/assets/images/handbag.jpg';
import hoodieImg from '@/assets/images/hoodie.jpg';
import shoesImg from '@/assets/images/shoes.jpg';

const Main = () => {
  const navigate = useNavigate();

  const hotRaffleList: TmpHotRaffleItem[] = [
    {id: 1, img: shoesImg, brand: "NIKE", name: "Air Jordan 1 Retro High OG 'Chicago Lost and Found'", price: 289000, timer: "02:15:30"},
    {id: 2, img: hoodieImg, brand: "SUPREME", name: "Box Logo Hoodie Black", price: 450000, timer: "01:45:20"},
    {id: 3, img: clockImg, brand: "ROLEX", name: "Submariner Date 126610LN", price: 15800000, timer: "01:45:20"},
    {id: 4, img: handbagImg, brand: "LOUIS VUITTON", name: "Neverfull MM Monogram", price: 2380000, timer: "06:20:15"},
  ];
  const clickRapple = (data: TmpHotRaffleItem) => {
    console.log('clickRapple' + data);
    navigate(`/product/${data.id}`);
  }

  const hotFCFSList: TmpFCFSCardProps[] = [
    {id: 1, img: shoesImg, brand: "ADIDAS", name: "Yeezy Boost 350 V2 'Zebra'", price: 320000, stock: "15/100", progress: 15, },
    {id: 2, img: hoodieImg, brand: "STONE ISLAND", name: "Shadow Project Jacket", price: 890000, stock: "3/50", progress: 6, },
    {id: 3, img: clockImg, brand: "OMEGA", name: "Speedmaster Professional Moonwatch", price: 8900000, isSoldOut: true, },
    {id: 4, img: handbagImg, brand: "HERMÈS", name: "Birkin 30 Togo Leather", price: 18500000, stock: "1/5", progress: 20, },
  ];
  const clickFCFS = (data: unknown) => {
    console.log('clickFCFS' + data);
  }
  
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* --- Navbar --- */}
      <Navbar search={() => {console.log('go search');}} />

      {/* --- Hero Section --- */}
      <section className="relative h-137.5 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <img 
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight uppercase">Limited Drop</h1>
          <p className="text-lg md:text-xl mb-8 font-light text-gray-200">희소가치를 경험하세요</p>
          <button className="bg-white text-black px-12 py-3.5 text-sm font-bold hover:bg-gray-200 transition-all active:scale-95 cursor-pointer">
            쇼핑 시작하기
          </button>
        </div>
      </section>

      {/* --- Hot Raffle Products --- */}
      <section className="px-8 py-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold tracking-tight">인기 래플 상품들</h2>
            <button className="text-xs font-medium flex items-center text-gray-500 hover:text-black transition cursor-pointer">
              View All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {hotRaffleList.map((item, idx) => (
              <div key={idx}>
                <RaffleCard 
                  img={item.img} 
                  brand={item.brand} 
                  name={item.name} 
                  price={item.price} 
                  timer={item.timer} 
                  click={() => clickRapple(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Hot FCFS Drops --- */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold tracking-tight">인기 선착순 상품들</h2>
            <button className="text-xs font-medium flex items-center text-gray-500 hover:text-black transition cursor-pointer">
              View All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {hotFCFSList.map((item, idx) => (
              <div key={idx}>
                <FCFSCard 
                  img={item.img} 
                  brand={item.brand} 
                  name={item.name} 
                  price={item.price} 
                  stock={item.stock} 
                  progress={item.progress} 
                  isSoldOut={item.isSoldOut} 
                  click={() => clickFCFS(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-black text-white py-28 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-4">놓치지 마세요</h2>
        <p className="mb-10 text-gray-400 font-light text-sm md:text-base">한정된 기회, 지금 바로 참여하세요</p>
        <button onClick={() => navigate('/shop')} className="bg-white text-black px-14 py-4 text-sm font-bold hover:bg-gray-200 transition-all cursor-pointer">
          전체 상품 보기
        </button>
      </section>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default Main;