import { useEffect, useState } from "react";
import { getEntries } from "./services";
import EntriesTableComponent from "@components/EntriesTableComponent";
import SpinnerLoaderComponent from "@components/SpinnerLoaderComponent";
import HeaderComponent from "@components/HeaderComponent";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEntries = async () => {
    try {
      const data = await getEntries();
      setEntries(data.entries);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <HeaderComponent
        title="News Table"
        subtitle="Hacker News entries with filters and search"
      />
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12 py-5">
        {loading ? (
          <SpinnerLoaderComponent />
        ) : (
          <EntriesTableComponent entries={entries} />
        )}
      </div>
    </div>
  );
};

export default App;
