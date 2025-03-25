// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: "https://ecommerce-backend-zckp.onrender.com/api" // Đã sửa URL (bỏ phần bị lặp)
});

// Thêm interceptor (tuỳ chọn) - Xử lý request/respone chung
API.interceptors.request.use(
  (config) => {
    // Thêm token vào header nếu có
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;  // Nhớ export để sử dụng ở các file khác