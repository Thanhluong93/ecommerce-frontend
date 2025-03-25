// src/services/api.js
import axios from 'axios';  // Dùng cho frontend (React/Vue)
const API = axios.create({
    baseURL: "https://ecommerce-backend-zckp.onrender.comhttps://ecommerce-backend-zckp.onrender.com/api" // Thay bằng URL Render của bạn
  });