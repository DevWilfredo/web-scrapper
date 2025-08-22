import { useState } from "react";
import FilterButton from "../FilterButton";
import SearchBarComponent from "../SearchBarComponent";

const EntriesTableComponent = ({ entries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEntries = entries.filter((entry) => {
    const matchSearch = entry.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12 py-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <SearchBarComponent setSearchTerm={setSearchTerm} />
          <FilterButton />
        </div>
        <div className="overflow-x-auto">
          {filteredEntries.length === 0 ? (
            <div className="flex items-center justify-center py-10">
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                There are no results that match your search.
              </p>
            </div>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Rank
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Points
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry) => (
                  <tr
                    className="border-b dark:border-gray-700"
                    key={entry.rank}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {entry.rank}
                    </th>
                    <td className="px-4 py-3">{entry.title}</td>
                    <td className="px-4 py-3">{entry.score}</td>
                    <td className="px-4 py-3">{entry.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntriesTableComponent;