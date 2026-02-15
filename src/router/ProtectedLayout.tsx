import { User, LogIn, CircleAlert } from "lucide-react";
import { Outlet } from 'react-router-dom';
// import { Navigate, Outlet } from 'react-router-dom';
import { useIsLoggedIn } from '@/store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();

  // if (isLoggedIn) {
  if (!isLoggedIn) {
    // return <Navigate to="/login" replace />;
    return <div className="min-h-screen bg-white text-black font-sans">
      {/* --- Navbar --- */}
      <Navbar search={() => {console.log('go search');}} />

      <main className="min-h-200 flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <User className="h-10 w-10 text-gray-400" />
          </div>
          <h1 className="mb-2 text-xl font-semibold text-gray-900">
            로그인이 필요합니다
          </h1>
          <p className="mb-6 text-sm text-gray-500">
            마이페이지를 이용하려면 로그인해주세요.
          </p>
          <button onClick={() => navigate('/login')} className="flex items-center gap-2 bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-gray-900 cursor-pointer">
            <LogIn className="h-4 w-4" />
            <span>로그인하기</span>
          </button>
          <div className="mt-4 flex items-center gap-1 text-xs text-gray-400">
            <CircleAlert className="h-3 w-3" />
            <span>로그인 후 다양한 서비스를 이용하실 수 있습니다.</span>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  }

  return <Outlet />; 
};

export default ProtectedLayout;
