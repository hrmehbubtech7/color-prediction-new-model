import axios from 'axios';
import { serverUrl } from './urls.config';

export const axiosInstance = axios.create({
  baseURL: `${serverUrl}/api`,
});

// add token in request interceptor axios
// axiosInstance.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem(
//     'accessToken',
//   )}`;
//   return config;
// });