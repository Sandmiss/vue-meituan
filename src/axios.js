import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com';
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.params = {
    ...config.params,
    appkey:"murphy_1564186397039"
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axios;