import { useEffect, useState } from "react";
import { getEntries } from "./services";
import EntriesTableComponent from "./components/EntriesTableComponent";

const App = () => {
  const [entries, setEntries] = useState([]);
  const fetchEntries = async () => {
    const data = await getEntries();
    setEntries(data.entries);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  console.log(entries);
  return <EntriesTableComponent entries={entries} />;
};

export default App;
