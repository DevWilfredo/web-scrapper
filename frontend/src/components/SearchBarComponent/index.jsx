import { Search } from "lucide-react";

const SearchBarComponent = ({ setSearchTerm }) => {
  return (
    <div className="w-full md:w-1/2">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="size-5 text-white" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white border text-sm rounded-lg block w-full pl-10 p-2"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBarComponent;
