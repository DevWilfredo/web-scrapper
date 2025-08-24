import { useState } from "react";
import { SearchX } from "lucide-react";
import { filterAndSortEntries } from "@utils/entriesUtils";
import FilterButton from "@components/FilterButtonComponent";
import SearchBarComponent from "@components/SearchBarComponent";

const EntriesTableComponent = ({ entries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMode, setFilterMode] = useState("All");

  const finalEntries = filterAndSortEntries(entries, searchTerm, filterMode);

  return (
    <div className="bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <SearchBarComponent setSearchTerm={setSearchTerm} />
        <FilterButton filterMode={filterMode} setFilterMode={setFilterMode} />
      </div>
      <div className="overflow-x-auto">
        {finalEntries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <SearchX className="w-12 h-12 text-gray-400 mb-3" />
            <p className="text-lg text-gray-500">
              There are no results that match your search.
            </p>
          </div>
        ) : (
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Points</th>
                <th className="px-4 py-3">Comments</th>
              </tr>
            </thead>
            <tbody>
              {finalEntries.map((entry) => (
                <tr className="border-b border-gray-700" key={entry.rank}>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap text-white"
                  >
                    {entry.rank}
                  </th>
                  <td className="px-4 py-3">{entry.title}</td>
                  <td className="px-4 py-3">{entry.score} points</td>
                  <td className="px-4 py-3">{entry.comments} comments</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EntriesTableComponent;
