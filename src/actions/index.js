import axios from "axios";

import { getRefreshToken } from "../utils/index";

const refresh = axios.create();

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  const originalRequest = error.config;
  if(error.response.status === 401){
    return refresh.get("/api/v0/token", {headers: {'Authorization': getRefreshToken()}})
        .then((res) => {
          console.log("resdata",res);
          axios.defaults.headers.common['Authorization'] = res.data.token;
          originalRequest.headers['Authorization'] = res.data.token;
          return axios(originalRequest);
        })
        .catch(err => {
          console.log("should redirect", err);
        })
  }

  return Promise.reject(error);
});

export * from "./user";
export * from "./auth";

