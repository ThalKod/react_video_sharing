import axios from "axios";
import { AUTH_USER } from "./actionTypes";




export const startSignupUser = (user, callback) => (dispatch) =>{
  axios.post("/api/v0/signup", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: AUTH_USER, payload: res.data.token});
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));
};

export const startSigninUser = (user, callback) => (dispatch) =>{
  axios.post("/api/v0/signin", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: AUTH_USER, payload: res.data.token});
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));
};

