interface itemProps {
  img?: string;
  brand: string;
  name: string;
  price: number;
  timer: string;
  click: () => void;
}

const RaffleCard = ({ img, brand, name, price, timer, click }: itemProps) => {

  return (
    <div onClick={() => click()} className="group cursor-pointer">
      <div className="relative aspect-square bg-white border border-gray-100 overflow-hidden mb-4">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" />
        <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
          {timer} 남음
        </div>
      </div>
      <div className="text-[10px] text-gray-400 font-bold mb-1 tracking-tighter uppercase">{brand}</div>
      <div className="text-[13px] font-medium mb-1 line-clamp-1 group-hover:underline">{name}</div>
      <div className="font-bold text-sm italic">₩{price}</div>
    </div>
  );
};

export default RaffleCard;