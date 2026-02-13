export interface PageListItem {
  id: number;
}

interface itemProps {
  pageList: PageListItem[];
  click: (data: PageListItem) => void;
}

const Pagenation = ({ pageList, click }: itemProps) => {

  return (
    <div className="mt-10 flex items-center justify-center gap-2 text-sm">
      <button className="px-4 py-2 text-gray-500 hover:text-black cursor-pointer">
        이전
      </button>
      {pageList.map((item, idx) => (
        <div key={idx}>
          <button onClick={() => click(item)} className="h-9 w-9 border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer">
            {idx + 1}
          </button>
        </div>
      ))}
      <button className="px-4 py-2 text-gray-500 hover:text-black cursor-pointer">
        다음
      </button>
    </div>
  );
};

export default Pagenation;