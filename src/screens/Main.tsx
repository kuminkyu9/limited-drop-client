import { ChevronRight } from 'lucide-react';
import Navbar from '@/screens/Navbar';
import RaffleCard from '@/screens/RaffleCard';
import FCFSCard from '@/screens/FCFSCard';

interface TmpHotRaffleItem {
  img?: string;
  brand: string;
  name: string;
  price: number;
  timer: string;
}

interface TmpFCFSCardProps {
  img?: string;
  brand: string;
  name: string;
  price: number;
  stock?: string;
  progress?: number;
  isSoldOut?: boolean;
}

const Main = () => {
  const hotRaffleList: TmpHotRaffleItem[] = [
    {img: undefined, brand: "NIKE", name: "Air Jordan 1 Retro High OG 'Chicago Lost and Found'", price: 289000, timer: "02:15:30"},
    {img: undefined, brand: "SUPREME", name: "Box Logo Hoodie Black", price: 450000, timer: "01:45:20"},
    {img: undefined, brand: "ROLEX", name: "Submariner Date 126610LN", price: 15800000, timer: "01:45:20"},
    {img: undefined, brand: "LOUIS VUITTON", name: "Neverfull MM Monogram", price: 2380000, timer: "06:20:15"},
  ];
  const clickRapple = (data: unknown) => {
    console.log('clickRapple' + data);
  }


  const hotFCFSList: TmpFCFSCardProps[] = [
    {img: undefined, brand: "ADIDAS", name: "Yeezy Boost 350 V2 'Zebra'", price: 320000, stock: "15/100", progress: 15, },
    {img: undefined, brand: "STONE ISLAND", name: "Shadow Project Jacket", price: 890000, stock: "3/50", progress: 6, },
    {img: undefined, brand: "OMEGA", name: "Speedmaster Professional Moonwatch", price: 8900000, isSoldOut: true, },
    {img: undefined, brand: "HERMÈS", name: "Birkin 30 Togo Leather", price: 18500000, stock: "1/5", progress: 20, },
  ];
  const clickFCFS = (data: unknown) => {
    console.log('clickFCFS' + data);
  }
  
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* --- Navbar --- */}
      <Navbar search={() => {console.log('go search');}} shopping={() => {console.log('go shopping')}} login={() => {console.log('go login')}}/>

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
        <button className="bg-white text-black px-14 py-4 text-sm font-bold hover:bg-gray-200 transition-all cursor-pointer">
          전체 상품 보기
        </button>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black text-white px-8 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="font-black text-xl mb-4 tracking-tighter">LIMITED DROP</div>
            <p className="text-xs text-gray-500 font-light leading-relaxed">한정판 래플 & 선착순 커머스 플랫폼</p>
          </div>
          <div className="flex flex-col space-y-2.5 text-[13px] text-gray-400">
            <span className="text-white font-bold mb-1 text-sm uppercase">Customer Service</span>
            <a href="#" className="hover:text-white transition">고객센터</a>
            <a href="#" className="hover:text-white transition">이용약관</a>
            <a href="#" className="hover:text-white transition">개인정보처리방침</a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 tracking-widest">
          © 2026 LIMITED DROP. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default Main;