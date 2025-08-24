export const countWords = (str) => {
  const wordsArray = str.match(/\p{L}[\p{L}\p{N}'’.-]*/gu) || [];
  return wordsArray.length;
};

export const filterAndSortEntries = (entries, searchTerm, filterMode) => {
  const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterMode === "Long") {
    return filteredEntries
      .filter((entry) => countWords(entry.title) > 5)
      .sort((a, b) => b.comments - a.comments);
  }

  if (filterMode === "Short") {
    return filteredEntries
      .filter((entry) => countWords(entry.title) <= 5)
      .sort((a, b) => b.score - a.score);
  }

  return filteredEntries;
};
