import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseUrl = 'http://0.0.0.0:8080/odyssey-lift-off-rest-api.herokuapp.com';

// http://js-post-api.herokuapp.com/api
// https://odyssey-lift-off-rest-api.herokuapp.com/

var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
export function doCORSRequest(options: any, printResult: any) {
  var x = new XMLHttpRequest();
  x.open(options.method, cors_api_url + options.url);
  x.onload = x.onerror = function () {
    printResult(
      options.method +
        ' ' +
        options.url +
        '\n' +
        x.status +
        ' ' +
        x.statusText +
        '\n\n' +
        (x.responseText || '')
    );
  };
  if (/^POST/i.test(options.method)) {
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  x.send(options.data);
}

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
// handle any request before send to server
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// handle any response before receive to server
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
