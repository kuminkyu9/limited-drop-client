import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* --- Navbar --- */}
      <Navbar search={() => console.log("go search")} />
        
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 md:px-6 py-8 font-sans">
        {/* 중앙 카드 - 컴팩트하게 */}
        <div className="w-full max-w-lg">
          <div className="border border-gray-150 rounded-2xl px-8 py-12 md:px-10 md:py-14 bg-white shadow-sm">
            
            {/* 상단 라벨 */}
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-8">
              NOT FOUND
            </p>

            {/* 메인 타이틀 - 크기 다운 */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-[2.75rem] font-black leading-tight tracking-tight bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                페이지가 없어요
              </h1>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-sm">
                요청하신 페이지는 존재하지 않거나<br />
                이동되었을 수 있습니다.
              </p>
            </div>

            {/* 404 숫자 - 크기 다운 */}
            <div className="flex items-center justify-center text-3xl md:text-[4rem] lg:text-[4.5rem] font-black tracking-widest text-gray-200 select-none mb-8">
              <span>404</span>
            </div>

            {/* 서브 텍스트 */}
            <p className="text-sm text-gray-400 text-center max-w-sm mx-auto mb-8 leading-relaxed">
              주소를 다시 확인하거나 아래 버튼을 통해<br />
              다른 페이지로 이동해 주세요.
            </p>

            {/* 버튼 영역 */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate(-1)}
                className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 min-w-30"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>이전으로</span>
              </button>

              <button
                onClick={() => navigate('/')}
                className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-black hover:bg-gray-900 text-white px-6 py-3 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg min-w-30"
              >
                <Home className="w-4 h-4" />
                <span>홈으로</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default NotFoundPage;
