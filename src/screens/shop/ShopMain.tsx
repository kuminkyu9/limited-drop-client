import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Product = {
  id: number;
  brand: string;
  name: string;
  price: number;
  left: number; // 남은 수량
  total: number;
};

const products: Product[] = [
  { id: 1, brand: "NIKE", name: "한정판 스니커즈 컬렉션 1", price: 250000, left: 100, total: 100 },
  { id: 2, brand: "ADIDAS", name: "한정판 스니커즈 컬렉션 2", price: 260000, left: 92, total: 100 },
  { id: 3, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 3", price: 270000, left: 84, total: 100 },
  { id: 4, brand: "NIKE", name: "한정판 스니커즈 컬렉션 4", price: 280000, left: 76, total: 100 },
  { id: 5, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 5", price: 290000, left: 68, total: 100 },
  { id: 6, brand: "NIKE", name: "한정판 스니커즈 컬렉션 6", price: 300000, left: 60, total: 100 },
  { id: 7, brand: "ADIDAS", name: "한정판 스니커즈 컬렉션 7", price: 310000, left: 52, total: 100 },
  { id: 8, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 8", price: 320000, left: 44, total: 100 },
  { id: 9, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 9", price: 330000, left: 36, total: 100 },
  { id: 10, brand: "NIKE", name: "한정판 스니커즈 컬렉션 10", price: 340000, left: 28, total: 100 },
  { id: 11, brand: "ADIDAS", name: "한정판 스니커즈 컬렉션 11", price: 350000, left: 20, total: 100 },
  { id: 12, brand: "NEW BALANCE", name: "한정판 스니커즈 컬렉션 12", price: 360000, left: 12, total: 100 },
];

const formatPrice = (value: number) =>
  `₩${value.toLocaleString("ko-KR")}`;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const percent = (product.left / product.total) * 100;

  return (
    <div className="flex flex-col bg-white">
      {/* 이미지 영역 */}
      <div className="relative bg-black">
        {/* 상단 배지 */}
        <span className="absolute left-3 top-3 rounded-sm bg-red-600 px-2 py-1 text-xs font-semibold text-white">
          선착순
        </span>

        {/* 실제 이미지는 여기 src 교체 */}
        <img
          src="/images/shoes/sample-shoe.jpg"
          alt={product.name}
          className="h-72 w-full object-cover"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="mt-3 flex flex-col gap-1 px-1 pb-4">
        <span className="text-xs font-semibold text-gray-400">
          {product.brand}
        </span>
        <span className="text-sm text-gray-800">{product.name}</span>
        <span className="mt-1 text-base font-semibold text-gray-900">
          {formatPrice(product.price)}
        </span>

        {/* 남은 수량 + progress bar */}
        <div className="mt-2">
          <p className="text-xs text-gray-500">
            남은 수량: {product.left}/{product.total}
          </p>
          <div className="mt-1 h-1 w-full rounded-full bg-gray-200">
            <div
              className="h-1 rounded-full bg-red-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopMain = () => {
  const hotOrderCount = products.length;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 상단 헤더 */}
      <header className="border-b border-gray-200">
        {/* --- Navbar --- */}
        <Navbar search={() => {console.log('go search');}} />

        {/* 상단 필터 탭 */}
        <div className="border-t border-gray-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex gap-6 text-sm">
              <button className="flex items-center gap-1 font-semibold text-red-500">
                <span>🔥</span>
                <span>선착순</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500">
                <span>📦</span>
                <span>래플</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500">
                <span>📅</span>
                <span>캘린더</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500">
                <span>📂</span>
                <span>일반</span>
              </button>
            </div>

            <div className="text-xs text-gray-500">
              총 {hotOrderCount}개의 상품
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠: 상품 그리드 + 페이지네이션 */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* 상단 그리드 (1~8) */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>

        {/* 중간 여백 */}
        <div className="h-16" />

        {/* 하단 그리드 (9~12) - 스크롤 맨 아래 이미지 구간 */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>

        {/* 페이지네이션 */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm">
          <button className="px-4 py-2 text-gray-500 hover:text-black">
            이전
          </button>

          <button className="h-9 w-9 border border-gray-200 text-gray-700 hover:bg-gray-50">
            1
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            4
          </button>
          <button className="h-9 w-9 border border-gray-200 text-gray-500 hover:bg-gray-50">
            5
          </button>

          <button className="px-4 py-2 text-gray-500 hover:text-black">
            다음
          </button>
        </div>
      </main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default ShopMain;
