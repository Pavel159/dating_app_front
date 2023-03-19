import axios from 'axios';

const $host = axios.create({
  //   baseURL: process.env.API_URL,
  baseURL: 'http://localhost:5000/',
});

const $authHost = axios.create({
  //   baseURL: process.env.API_URL,
  baseURL: 'http://localhost:5000/',
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $authHost, $host };
