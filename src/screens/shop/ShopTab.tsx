import { Flame, Ticket, Tag } from "lucide-react";

type TabKey = "firstCome" | "raffle" | "normal";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "firstCome",
    label: "선착순",
    icon: <Flame className="h-4 w-4" />,
  },
  {
    key: "raffle",
    label: "래플",
    icon: <Ticket className="h-4 w-4" />,
  },
  {
    key: "normal",
    label: "일반",
    icon: <Tag className="h-4 w-4" />,
  },
];

interface DropTabsProps {
  value: TabKey;
  onChange: (value: TabKey) => void;
}

const ShopTab = ({ value, onChange }: DropTabsProps) => {

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* 왼쪽 탭 영역 */}
        <div className="flex gap-6 text-sm">
          {tabs.map((tab) => {
            const isActive = tab.key === value;
            return (
              <button
                key={tab.key}
                onClick={() => onChange(tab.key)}
                className={[
                  "flex items-center gap-1 border-b-2 pb-1 transition-colors cursor-pointer",
                  isActive
                    ? "border-black font-semibold text-black"
                    : "border-transparent text-gray-500 hover:text-black",
                ].join(" ")}
              >
                <span className={isActive ? "text-red-500" : "text-gray-400"}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopTab;