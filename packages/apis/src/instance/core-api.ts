import { COOKIES } from "@repo/ui/constant/cookie";
import { postRefreshToken } from "../services/core/accounts/refresh/post/post-refresh-token";
import axios, { type AxiosError } from "axios";
import Cookie from "js-cookie";

let isRefreshing = false;
let failedQueue: any[] = [];

export const coreApi = axios.create({
  baseURL: "http://localhost:8000/", // You can set your base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

const processQueue = (
  error: AxiosError | null,
  token: string | null = null,
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

coreApi.interceptors.request.use((config) => {
  const accessToken = Cookie.get(COOKIES.ACCESS_TOKEN);
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

coreApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = Cookie.get(COOKIES.REFRESH_TOKEN);
      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const { data } = await postRefreshToken({ refresh: refreshToken });
        const newAccessToken = data?.access;

        Cookie.set(COOKIES.ACCESS_TOKEN, newAccessToken);
        coreApi.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
        processQueue(null, newAccessToken);

        return coreApi(originalRequest);
      } catch (refreshError: any) {
        processQueue(refreshError, null);
        Cookie.remove(COOKIES.ACCESS_TOKEN);
        Cookie.remove(COOKIES.REFRESH_TOKEN);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
