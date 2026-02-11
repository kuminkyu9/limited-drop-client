import { Search, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useNavigate } from 'react-router-dom';

const CartBadge = () => {
  const itemCount = useCartStore((state) => state.items.length);

  return <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">{itemCount}</span>;
};

interface itemProps {
  search: () => void;
}

const Navbar = ({ search }: itemProps) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  const shopping = () => {
    navigate('/shop');
  }

  const login = () => {
    console.log('login');
  }

  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <div onClick={() => goHome()} 
      className="text-xl font-black tracking-tighter cursor-pointer">LIMITED DROP</div>
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <span onClick={() => goHome()} className="hover:text-gray-500 transition cursor-pointer">HOME</span>
        <span onClick={() => shopping()} className="hover:text-gray-500 transition cursor-pointer">SHOP</span>
        <span onClick={() => login()} className="hover:text-gray-500 transition cursor-pointer">MY PAGE</span>
      </div>
      <div className="flex items-center space-x-5">
        <Search onClick={() => search()} size={20} className="hover:text-gray-500 cursor-pointer" />
        <div onClick={() => shopping()} className="relative cursor-pointer">
          <ShoppingCart size={20} className="hover:text-gray-500 cursor-pointer" />
          <CartBadge />
        </div>
        <button onClick={() => login()} className="border border-black px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition uppercase cursor-pointer">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;