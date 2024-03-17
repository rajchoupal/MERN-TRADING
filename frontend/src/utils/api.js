import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Adjust the base URL according to your backend server configuration

const axiosInstance = axios.create({
  baseURL,
});

// Define API endpoints
const api = {
  // Auth endpoints
  login: (credentials) => axiosInstance.post('/auth/login', credentials),
  register: (userData) => axiosInstance.post('/auth/register', userData),
  // Trade endpoints
  executeTrade: (tradeData) => axiosInstance.post('/trades/execute', tradeData),
  getTradeHistory: () => axiosInstance.get('/trades/history'),
  // User endpoints
  getCurrentUser: () => axiosInstance.get('/users/current'),
  // Watchlist endpoints
  getWatchlist: () => axiosInstance.get('/watchlist'),
  addToWatchlist: (symbol) => axiosInstance.post('/watchlist', { symbol }),
  removeFromWatchlist: (symbol) => axiosInstance.delete(`/watchlist/${symbol}`),
};

export default api;
