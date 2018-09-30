import axios from 'axios';

const apiHandler = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 3000,
});

export default apiHandler;
