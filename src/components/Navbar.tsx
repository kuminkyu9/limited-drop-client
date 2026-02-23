import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useCartStore } from '@/store/useCartStore';
import { useIsLoggedIn } from '@/store/useAuthStore';

const CartBadge = () => {
  const itemCount = useCartStore((state) => state.items.length);

  return <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">{itemCount}</span>;
};

interface itemProps {
  search: () => void;
}

const Navbar = ({ search }: itemProps) => {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goHome = () => {
    navigate('/');
  }

  const goShop = () => {
    navigate('/shop/firstCome/1');
  }

  const goMypage = () => {
    navigate('/mypage');
  }

  const goCart = () => {
    navigate('/cart');
  }

  const login = () => {
    navigate('/login');
  }

  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-100">
      {/* 로고 (680px 초과 시에만 노출) */}
      <div 
        onClick={() => goHome()} 
        className="hidden [@media(min-width:681px)]:block text-xl font-black tracking-tighter cursor-pointer select-none"
      >
        LIMITED DROP
      </div>

      {/* 410px 이하일 때: 메뉴 버튼 노출 */}
      <div className="block [@media(min-width:411px)]:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 메인 메뉴 (HOME, SHOP, MY PAGE) */}
      {/* 조건: 411px 이상이거나, 410px 이하이면서 메뉴가 열려있을 때만 노출 */}
      <div className={`
        ${isMenuOpen ? "flex" : "hidden [@media(min-width:411px)]:flex"} 
        space-x-4 sm:space-x-8 text-sm font-medium
      `}>
        <span onClick={() => goHome()} className="hover:text-gray-500 transition cursor-pointer">HOME</span>
        <span onClick={() => goShop()} className="hover:text-gray-500 transition cursor-pointer">SHOP</span>
        <span onClick={() => goMypage()} className="hover:text-gray-500 transition cursor-pointer text-nowrap">MY PAGE</span>
      </div>

      {/* 유틸 메뉴 (Search, Cart, Login) */}
      {/* 조건: 411px 이상이거나, 410px 이하이면서 메뉴가 닫혀있을 때만 노출 */}
      <div className={`
        ${!isMenuOpen ? "flex" : "hidden [@media(min-width:411px)]:flex"} 
        items-center space-x-3 sm:space-x-5
      `}>
        <Search onClick={() => search()} size={20} className="hidden hover:text-gray-500 cursor-pointer" />
        <div onClick={() => goCart()} className="relative cursor-pointer">
          <ShoppingCart size={20} className="hover:text-gray-500 cursor-pointer" />
          {isLoggedIn && <CartBadge />}
        </div>
        <button 
          onClick={() => login()} 
          className="border border-black px-3 sm:px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition uppercase cursor-pointer whitespace-nowrap"
        >
          Login
        </button>
      </div>
    </nav>
    );
};

export default Navbar;