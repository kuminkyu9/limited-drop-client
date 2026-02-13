import axios from 'axios';
import { useAuthStore } from '@/store/useAuthStore';
import { BASE_URL } from '@/constants/env';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// 요청
api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

// 응답
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = useAuthStore.getState().refreshToken;
        
        const res = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });
        const { accessToken } = res.data;

        useAuthStore.getState().setAccessToken(accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().logout();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);