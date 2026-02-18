import { Star } from "lucide-react";

export interface TmpNormalItem {
  id: number;
  img?: string;
  brand: string;
  name: string;
  price: number;
  rating: number;   // max: 5
  reviews: number;
}

interface ItemProps {
  img?: string;
  brand: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  click: () => void;
}

const NormalCard = ({ img, brand, name, price, rating, reviews, click }: ItemProps) => {
  return (
    <div
      onClick={click}
      className="group cursor-pointer rounded-sm bg-white"
    >
      {/* 이미지 영역 */}
      <div className="relative mb-3 aspect-square overflow-hidden border border-gray-100 bg-black">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* 브랜드 */}
      <div className="mb-1 text-[11px] font-semibold tracking-[0.18em] text-gray-400">{brand.toUpperCase()}</div>

      {/* 상품명 */}
      <div className="text-[13px] font-medium mb-1 line-clamp-1 group-hover:underline text-gray-900">{name}</div>

      {/* 가격 */}
      <div className="mb-2 text-base font-bold text-gray-900">₩{price.toLocaleString("ko-KR")}</div>

      {/* 평점 영역 */}
      <div className="flex items-center gap-1 text-[11px] text-gray-500">
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        <span className="text-yellow-500 font-semibold">{rating}</span>
        <span className="text-gray-400">({reviews})</span>
      </div>
    </div>
  );
};

export default NormalCard;
