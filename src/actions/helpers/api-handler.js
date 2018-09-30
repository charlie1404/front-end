import axios from 'axios';

const { API_END_POINT } = process.env;

const internalHandler = axios.create({
  baseURL: API_END_POINT,
});

const apiHandler = (
  url,
  method = 'get',
  body = {},
  config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
) => {
  internalHandler[method](url, body, config);
};

export default apiHandler;
