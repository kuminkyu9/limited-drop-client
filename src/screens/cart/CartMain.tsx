import { ShoppingCart } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CartMain = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* --- Navbar --- */}
      <Navbar search={() => {console.log('go search');}} />

      <div className="min-h-[calc(100vh-63px)] flex flex-col items-center justify-center bg-white">
        <div className="w-full max-w-md -translate-y-15.75 flex flex-col items-center">
          <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-gray-50">
            <ShoppingCart className="h-12 w-12 text-gray-300" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">장바구니가 비어있습니다</h1>
          <p className="mt-3 text-sm text-gray-500">마음에 드는 상품을 담아보세요!</p>
          <button className="mt-7 h-11 px-8 rounded bg-black text-sm font-semibold text-white hover:bg-gray-900 cursor-pointer">쇼핑 계속하기</button>
        </div>
      </div>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default CartMain;
