// lib/axiosInstance.ts
import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getService = (
  url: string,
  params: Record<string, any> = {}
): Promise<AxiosResponse> => axiosInstance.get(url, { params });

export const postService = (url: string, data: any): Promise<AxiosResponse> =>
  axiosInstance.post(url, data);

export const putService = (url: string, data: any): Promise<AxiosResponse> =>
  axiosInstance.put(url, data);

export const deleteService = (url: string): Promise<AxiosResponse> =>
  axiosInstance.delete(url);

export default axiosInstance;
