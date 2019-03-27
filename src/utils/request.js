// Request helper
import axios from"axios";

import { getRefreshToken } from "./index";

const API_URL = process.env.REACT_APP_API_URL;
const refresh = axios.create();

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const originalRequest = error.config;
  if(error.response && error.response.status === 401){
    return refresh.get(`${API_URL}/token`, {headers: {'Authorization': getRefreshToken()}})
        .then((res) => {
          //  axios.defaults.headers.common.Authorization = res.data.token;
          originalRequest.headers.Authorization = res.data.token;
          return axios(originalRequest);
        })
        .catch(err => {
          console.log("should redirect", err);
        })
  }
  return Promise.reject(error);
});

export const request = (method, url, options, data) => {
  const token = getRefreshToken();
  const headers = {
    Accept: "application/json",
    'Content-Type': 'application/json'
  };

  if(token) headers.Authorization = token;

  if(method === "post" || method === "put")
    return axios[method](`${API_URL}${url}`, data, {headers, ...options});

  return axios[method](`${API_URL}${url}`, { headers, ...options });
};
