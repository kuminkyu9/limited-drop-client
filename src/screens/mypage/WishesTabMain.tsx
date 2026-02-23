export interface WisheProps {
  id: number;
  brand: string;
  title: string;
  appliedAt: string;
  status: string;
  statusColor: string;
  thumbnail: string;
}

interface itemProps {
  wisheList: WisheProps[];
}

const WishesTabMain = ({ wisheList }: itemProps) => {
  return (
    <div className="space-y-4">
      {wisheList.length == 0 ? <div className="flex h-52 items-center justify-center rounded border border-dashed border-gray-200 text-base text-gray-400">
        아직 찜한 내역이 없습니다.
      </div> : wisheList.map((item) => (
        <div key={item.id} className="flex items-stretch gap-5 rounded-sm border border-gray-100 bg-gray-50 px-5 py-5">
          <div className="h-28 w-28 shrink-0 overflow-hidden bg-black">
            <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover"/>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400">{item.brand}</p>
              <p className="mt-1 text-base font-medium text-gray-900">{item.title}</p>
              <p className="mt-2 text-sm text-gray-500">{item.appliedAt}</p>
            </div>
            <div>
              <span className={`rounded-full px-5 py-1.5 text-xs font-semibold ${item.statusColor}`}>{item.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishesTabMain;
