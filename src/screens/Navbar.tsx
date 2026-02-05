import { Search, ShoppingCart } from 'lucide-react';

interface itemProps {
  count: number;
  search: () => void;
  shopping: () => void;
  login: () => void;
}

const Header = ({ count, search, shopping, login }: itemProps) => {

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <div className="text-xl font-black tracking-tighter cursor-pointer">LIMITED DROP</div>
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-500 transition">HOME</a>
        <a href="#" className="hover:text-gray-500 transition">SHOP</a>
        <a href="#" className="hover:text-gray-500 transition">MY PAGE</a>
      </div>
      <div className="flex items-center space-x-5">
        <Search onClick={() => search()} size={20} className="hover:text-gray-500 cursor-pointer" />
        <div onClick={() => shopping()} className="relative cursor-pointer">
          <ShoppingCart size={20} className="hover:text-gray-500 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">{count}</span>
        </div>
        <button onClick={() => login()} className="border border-black px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition uppercase cursor-pointer">Login</button>
      </div>
    </nav>
  );
};

export default Header;