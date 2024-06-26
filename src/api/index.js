import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// axios.defaults.baseURL = "https://app-event-back.onrender.com";

export async function queryFunction(query, params) {
  const { data } = await axios.get(query, { params });
  return data;
}

export async function mutationFunction(query, params) {
  const { data } = await axios.post(query, params);
  return data;
}
