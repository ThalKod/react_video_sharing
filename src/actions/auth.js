import axios from "axios";
import { AUTH_USER, SIGN_OUT_USER } from "./actionTypes";


export const startSignupUser = (user, callback) => (dispatch) =>{
  return axios.post("/api/v0/signup", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: AUTH_USER, payload: res.data });
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));
};

export const startSigninUser = (user, callback) => (dispatch) =>{
  return axios.post("/api/v0/signin", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: AUTH_USER, payload: res.data });
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));
};

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: SIGN_OUT_USER,
  }
};

