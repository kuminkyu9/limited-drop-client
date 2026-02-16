import Navbar from '@/components/Navbar';
import ShopTab from '@/screens/shop/ShopTab';
import Footer from '@/components/Footer';
import FCFSCard, { type TmpFCFSCardProps } from '@/screens/card/FCFSCard';
import Pagenation from '@/components/Pagenation';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

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

const pageList = [1, 2, 3, 4, 5];

const ShopMain = () => {
  const navigate = useNavigate();

  const { tab: routeTab, page: routePage } = useParams<{ tab: string; page: string }>();

  const isValidTab = (t: string | undefined): t is "firstCome" | "raffle" | "normal" => {
    return ["firstCome", "raffle", "normal"].includes(t as string);
  };

  const isValidPage = (p: string | undefined) => {
    return p && !isNaN(Number(p)) && Number(p) > 0;
  };

  const currentTab = isValidTab(routeTab) ? routeTab : "firstCome";
  const currentPage = isValidPage(routePage) ? routePage! : "1";

  const handleTabChange = (newTab: "firstCome" | "raffle" | "normal") => {
    navigate(`/shop/${newTab}/1`);
    console.log(`new_tab:${newTab}, page: ${currentPage}`);
  };

  const setPage = (newPage: number) => {
    navigate(`/shop/${currentTab}/${newPage}`);
    console.log(`new_page:${currentTab}, page: ${newPage}`);
  };

  // 주소창에 이상한 값(ㅇㄴㅇ 등) 입력 시 자동으로 주소 교정
  useEffect(() => {
    if (!isValidTab(routeTab) || !isValidPage(routePage)) {
      // 잘못된 주소면 정상적인 주소로 리다이렉트 (replace로 히스토리 관리)
      navigate(`/shop/${currentTab}/${currentPage}`, { replace: true });
    }
  }, [routeTab, routePage, currentTab, currentPage, navigate]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-100 border-b border-gray-200 bg-white">
        {/* --- Navbar --- */}
        <Navbar search={() => {console.log('go search');}} />
        
        {/* 상단 필터 탭 */}
        <ShopTab value={currentTab} onChange={handleTabChange} />
      </header>

      {/* 메인 컨텐츠: 상품 그리드 + 페이지네이션 */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div key={item.id}>
              <FCFSCard 
                {...item}
                click={() => console.log('tmp')}
              />
            </div>
          ))}
        </section>

        {/* 페이지네이션 */}
        <Pagenation currentPage={Number(currentPage)} pageList={pageList} click={setPage} />
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default ShopMain;
