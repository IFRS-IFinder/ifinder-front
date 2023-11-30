import axios from "axios";
import { API_URL, LOCAL_KEYS } from "@/constants";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = cookies().get(LOCAL_KEYS.TOKEN)?.value;

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;