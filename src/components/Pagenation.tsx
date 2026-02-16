interface itemProps {
  currentPage: number;
  pageList: number[];
  click: (data: number) => void;
}

const Pagenation = ({ currentPage, pageList, click }: itemProps) => {

  return (
    <div className="mt-10 flex items-center justify-center gap-2 text-sm">
      <button 
        onClick={() => currentPage > 1 && click(currentPage - 1)}
        className="px-4 py-2 text-gray-500 hover:text-black cursor-pointer disabled:opacity-30"
        disabled={currentPage <= 1}
      >
        이전
      </button>
      {pageList.map((item) => (
        <div key={item}>
          <button 
            onClick={() => click(item)} 
            className={`h-9 w-9 border cursor-pointer transition-colors ${
              currentPage === item 
                ? "bg-gray-100 border-gray-400 text-black font-bold" // 활성화 스타일 (hover색 응용)
                : "border-gray-200 text-gray-700 hover:bg-gray-50"   // 기본 스타일
            }`}
          >
            {item}
          </button>
        </div>
      ))}
      <button 
        onClick={() => currentPage < pageList.length && click(currentPage + 1)}
        className="px-4 py-2 text-gray-500 hover:text-black cursor-pointer disabled:opacity-30"
        disabled={currentPage >= pageList.length}
      >
        다음
      </button>
    </div>
  );
};

export default Pagenation;