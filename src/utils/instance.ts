import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://json-server-tekup.herokuapp.com/api/',
});

axiosInstance.interceptors.request.use(
  ($config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if ($config.headers) {
      $config.headers['Content-Type'] = 'application/json';
      $config.headers.Accept = 'application/json';
    }

    return $config;
  },
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(
    error.response && error.response.status === 422 ? (error.response.data as any).errors : error,
  ),
);
export default axiosInstance;
