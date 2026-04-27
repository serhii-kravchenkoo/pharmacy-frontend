import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://your-backend-url.com', // заміниш пізніше
  withCredentials: true,
});
