import { Flame } from "lucide-react";

export interface TmpFCFSCardProps {
  id: number;
  img?: string;
  brand: string;
  name: string;
  price: number;
  totalStock?: number;
  soldCount?: number;
}

interface itemProps {
  img?: string;
  brand: string;
  name: string;
  price: number;
  totalStock?: number;
  soldCount?: number;
  click: () => void;
}

const FCFSCard = ({ img, brand, name, price, totalStock, soldCount, click }: itemProps) => {
  
  // 숫자가 0일 때도 통과할 수 있도록 명시적으로 체크
  // totalStock이 있을 때만 렌더링하도록 설정
  const hasStockInfo = totalStock !== undefined && soldCount !== undefined;
  const isAvailable = hasStockInfo && totalStock > soldCount;

  return (
    <div onClick={() => click()} className={`group cursor-pointer ${!isAvailable ? 'opacity-40' : ''}`}>
      <div className="relative aspect-square bg-white border border-gray-100 overflow-hidden mb-4">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" />
        {isAvailable && (
          <div className="absolute top-2 left-2 inline-flex items-center gap-1 bg-red-600 px-2 py-1 text-[11px] font-bold text-white">
            <Flame className="h-3 w-3" />
            <span>선착순</span>
          </div>
        )}
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-black text-white px-4 py-1.5 text-xs font-black border border-white">SOLD OUT</div>
          </div>
        )}
      </div>
      
      {/* 브랜드 */}
      <div className="mb-1 text-[11px] font-semibold tracking-[0.18em] text-gray-400">{brand.toUpperCase()}</div>

      {/* 상품명 */}
      <div className="text-[13px] font-medium mb-1 line-clamp-1 group-hover:underline">{name}</div>

      {/* 가격 */}
      <div className="mb-2 text-base font-bold text-gray-900">₩{price.toLocaleString("ko-KR")}</div>
      
      {isAvailable && (
        <div className="mt-2">
          <div className="flex justify-between text-[10px] text-gray-500 mb-1.5 font-medium">
            <span>남은 수량: {totalStock - soldCount}</span>
            <span>{soldCount}/{totalStock}</span>
          </div>
          <div className="w-full h-0.75 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 rounded-full transition-all duration-1000" 
              style={{ width: `${(soldCount / totalStock) * 100}%` }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FCFSCard;