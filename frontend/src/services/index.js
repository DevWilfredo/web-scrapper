const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getEntries = async () => {
  const response = await fetch(`${API_URL}/news`);
  const data = await response.json();
  return data;
};
