import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://quantumpossibilities.eu:82/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
