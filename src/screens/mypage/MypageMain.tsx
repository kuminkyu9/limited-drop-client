import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EntriesTabMain, { type EntrieProps } from "@/screens/mypage/EntriesTabMain";
import OrdersTabMain, { type OrderProps } from "@/screens/mypage/OrdersTabMain";
import WishesTabMain, { type WisheProps } from "@/screens/mypage/WishesTabMain";
import { useState, type ReactNode } from "react";
import { User, Tickets, ShoppingBag, Coins, Heart } from "lucide-react";

type TabKey = "entries" | "orders" | "wishes";

const MypageMain = () => {
  const [tab, setTab] = useState<TabKey>("entries"); // 기본값: 응모 내역

  const tabs: { full: string; short: string; key: TabKey, icon: ReactNode }[] = [
    { full: "응모 내역", short: "응모", key: "entries", icon: <Tickets className="h-5 w-5" /> },
    { full: "주문 내역", short: "주문", key: "orders", icon: <ShoppingBag className="h-5 w-5" /> },
    { full: "찜한 내역", short: "찜", key: "wishes", icon: <Heart className="h-5 w-5" /> },
  ];

  // const entrieList: EntrieProps[] = []
  const entrieList: EntrieProps[] = [
    {
      id: 1,
      brand: "NIKE",
      title: "Air Jordan 1 Retro High OG",
      appliedAt: "응모 일시: 2026.01.25 14:30",
      status: "진행중",
      statusColor: "bg-yellow-300 text-yellow-900",
      thumbnail: "/images/raffle/jordan1.jpg",
    },
    {
      id: 2,
      brand: "SUPREME",
      title: "Box Logo Hoodie Black",
      appliedAt: "응모 일시: 2026.01.24 10:15",
      status: "당첨",
      statusColor: "bg-emerald-300 text-emerald-900",
      thumbnail: "/images/raffle/hoodie.jpg",
    },
    {
      id: 3,
      brand: "ROLEX",
      title: "Submariner Date",
      appliedAt: "응모 일시: 2026.01.20 16:45",
      status: "미당첨",
      statusColor: "bg-gray-200 text-gray-600",
      thumbnail: "/images/raffle/submariner.jpg",
    },
  ];

  // const orderList: OrderProps[] = [];
  const orderList: OrderProps[] = [
    {
      id: 1,
      brand: "NIKE",
      title: "Air Jordan 1 Retro High OG",
      appliedAt: "주문 일시: 2026.01.25 14:30",
      status: "배송중",
      statusColor: "bg-yellow-300 text-yellow-900",
      thumbnail: "/images/raffle/jordan1.jpg",
    },
    {
      id: 2,
      brand: "SUPREME",
      title: "Box Logo Hoodie Black",
      appliedAt: "주문 일시: 2026.01.24 10:15",
      status: "배송완료",
      statusColor: "bg-emerald-300 text-emerald-900",
      thumbnail: "/images/raffle/hoodie.jpg",
    },
    {
      id: 3,
      brand: "ROLEX",
      title: "Submariner Date",
      appliedAt: "주문 일시: 2026.01.20 16:45",
      status: "배송 준비중",
      statusColor: "bg-gray-200 text-gray-600",
      thumbnail: "/images/raffle/submariner.jpg",
    },
  ];

  const wisheList: WisheProps[] = [];
  // const wisheList: WisheProps[] = [
  //   {
  //     id: 1,
  //     brand: "NIKE",
  //     title: "Air Jordan 1 Retro High OG",
  //     appliedAt: "주문 일시: 2026.01.25 14:30",
  //     status: "배송중",
  //     statusColor: "bg-yellow-300 text-yellow-900",
  //     thumbnail: "/images/raffle/jordan1.jpg",
  //   },
  //   {
  //     id: 2,
  //     brand: "SUPREME",
  //     title: "Box Logo Hoodie Black",
  //     appliedAt: "주문 일시: 2026.01.24 10:15",
  //     status: "배송완료",
  //     statusColor: "bg-emerald-300 text-emerald-900",
  //     thumbnail: "/images/raffle/hoodie.jpg",
  //   },
  //   {
  //     id: 3,
  //     brand: "ROLEX",
  //     title: "Submariner Date",
  //     appliedAt: "주문 일시: 2026.01.20 16:45",
  //     status: "배송 준비중",
  //     statusColor: "bg-gray-200 text-gray-600",
  //     thumbnail: "/images/raffle/submariner.jpg",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- Navbar --- */}
      <Navbar search={() => console.log("go search")} />

      {/* 상단 검정 배너 + 프로필 */}
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-8">
          {/* 프로필 영역 */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
              <User className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <p className="text-xl font-semibold">userName</p>
                <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black">NORMAL</span>
              </div>
              <p className="mt-1 text-sm text-gray-300">example@email.com</p>
            </div>
          </div>
          {/* 포인트 영역 */}
          <div className="flex items-center flex-col gap-1 text-base">
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-yellow-300" />
              <span className="text-gray-200">포인트</span>
            </div>
            <span className="ml-2 text-2xl font-semibold">1,000P</span>
          </div>
        </div>
      </div>

      {/* 탭 영역 */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl gap-10 px-8">
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`flex items-center gap-2 border-b-2 pb-3 pt-4 text-base cursor-pointer ${
                tab === item.key
                  ? "border-black font-semibold text-black"
                  : "border-transparent text-gray-400 hover:text-black"
              }`}
            >
              {item.icon}
              {/* 모바일: short 출력 / 데스크톱(sm 이상): full 출력 */}
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.full}</span>
            </button>
          ))}
        </div>
      </div>

      {/* tab 내용 */}
      <main className="mx-auto min-h-[calc(100vh-245px)] max-w-6xl px-8 py-8">
      {/* <main className="mx-auto min-h-200 max-w-6xl px-8 py-8"> */}
        {
          tab === "entries" ? <EntriesTabMain entrieList={entrieList} /> 
          : tab === "orders" ? <OrdersTabMain orderList={orderList} /> 
          : <WishesTabMain wisheList={wisheList} />
        }
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default MypageMain;