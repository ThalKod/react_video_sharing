import { AUTH_USER } from "./actionTypes";
import axios from "axios";



export const startSignupUser = (user, callback) => (dispatch) =>{
  axios.post("/api/v0/signup", user)
      .then(res => {
        dispatch({ type: AUTH_USER, payload: res.data.token});
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));
};

export const startSigninUser = (user, callback) => (dispatch) =>{
  axios.post("/api/v0/signin", user)
      .then(res => {
        console.log("res============");
        dispatch({ type: AUTH_USER, payload: res.data.token});
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));
};

