import { ChevronDown, SlidersHorizontal } from "lucide-react";

const filterOptions = [
  { key: "All", label: "All" },
  { key: "Long", label: "More than 5 Words" },
  { key: "Short", label: "Less than 5 Words" },
];

const FilterButton = ({ filterMode, setFilterMode }) => {
  const currentLabel =
    filterOptions.find((opt) => opt.key === filterMode)?.label || "All";

  return (
    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
      <div className="relative w-full group">
        <button className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium  focus:outline-none  rounded-lg border focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 peer">
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          {currentLabel}
          <ChevronDown className="w-5 h-5 ml-2" />
        </button>

        <div className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-800 border border-dimmed text-xs md:text-sm">
          {filterOptions.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilterMode(key)}
              className={`w-full block text-start cursor-pointer px-3 py-2 rounded-md transition-all text-white ${
                filterMode === key
                  ? "bg-gray-900"
                  : " hover:bg-gray-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
