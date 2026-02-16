import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { User, Tickets, ShoppingBag, Coins } from "lucide-react";

type TabKey = "entries" | "orders";

const MypageMain = () => {
  const [tab, setTab] = useState<TabKey>("entries"); // 기본값: 응모 내역

  return (
    <div className="min-h-screen bg-white">
      {/* --- Navbar --- */}
      <Navbar search={() => console.log("go search")} />

      {/* 상단 검정 배너 + 프로필 (높이/폰트 업) */}
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-8">
          {/* 프로필 영역 */}
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
              <User className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <p className="text-xl font-semibold">asdasd</p>
                <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black">
                  NORMAL
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-300">asdasd@add</p>
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

      {/* 탭 영역 (높이/폰트 업, 탭 간 간격 줄여서 상단과 비슷하게) */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl gap-10 px-8">
          <button
            onClick={() => setTab("entries")}
            className={`flex items-center gap-2 border-b-2 pb-3 pt-4 text-base cursor-pointer ${
              tab === "entries"
                ? "border-black font-semibold text-black"
                : "border-transparent text-gray-400 hover:text-black"
            }`}
          >
            <Tickets className="h-5 w-5" />
            <span>응모 내역</span>
          </button>

          <button
            onClick={() => setTab("orders")}
            className={`flex items-center gap-2 border-b-2 pb-3 pt-4 text-base cursor-pointer ${
              tab === "orders"
                ? "border-black font-semibold text-black"
                : "border-transparent text-gray-400 hover:text-black"
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
            <span>주문 내역</span>
          </button>
        </div>
      </div>

      {/* 컨텐츠 영역 (전체 높이 키우고 여백 넉넉하게) */}
      <main className="mx-auto min-h-200 max-w-6xl px-8 py-8">
        {tab === "entries" ? <EntriesList /> : <OrdersList />}
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default MypageMain;

/* 응모 내역 리스트 */
const EntriesList = () => {
  const items = [
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

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-stretch gap-5 rounded-sm border border-gray-100 bg-gray-50 px-5 py-5"
        >
          {/* 썸네일: 조금 더 크게 */}
          <div className="h-28 w-28 shrink-0 overflow-hidden bg-black">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-1 items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400">
                {item.brand}
              </p>
              <p className="mt-1 text-base font-medium text-gray-900">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-gray-500">{item.appliedAt}</p>
            </div>

            {/* 상태 배지: 크기/여백 업 */}
            <div>
              <span
                className={`rounded-full px-5 py-1.5 text-xs font-semibold ${item.statusColor}`}
              >
                {item.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* 주문 내역 리스트 */
const OrdersList = () => {
  return (
    <div className="flex h-52 items-center justify-center rounded border border-dashed border-gray-200 text-base text-gray-400">
      아직 주문 내역이 없습니다.
    </div>
  );
};
