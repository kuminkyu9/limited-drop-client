interface itemProps {
  img?: string;
  brand: string;
  name: string;
  price: number;
  stock?: string;
  progress?: number;
  isSoldOut?: boolean;
  click: () => void;
}

const FCFSCard = ({ brand, name, price, stock, progress, isSoldOut, click }: itemProps) => {

  return (
    <div onClick={() => click()} className={`group cursor-pointer ${isSoldOut ? 'opacity-40' : ''}`}>
      <div className="relative aspect-square bg-white border border-gray-100 overflow-hidden mb-4">
        <img src="/api/placeholder/400/400" alt={name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" />
        {!isSoldOut && (
          <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] px-2 py-1 font-black italic">
            HOT FCFS
          </div>
        )}
        {isSoldOut && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-black text-white px-4 py-1.5 text-xs font-black border border-white">SOLD OUT</div>
          </div>
        )}
      </div>
      <div className="text-[10px] text-gray-400 font-bold mb-1 uppercase">{brand}</div>
      <div className="text-[13px] font-medium mb-1 line-clamp-1">{name}</div>
      <div className="font-bold text-sm mb-3 italic">₩{price}</div>
      {!isSoldOut && (
        <div className="mt-2">
          <div className="flex justify-between text-[10px] text-gray-500 mb-1.5 font-medium">
            <span>남은 수량</span>
            <span>{stock}</span>
          </div>
          <div className="w-full h-0.75 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-red-500 rounded-full transition-all duration-1000" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FCFSCard;