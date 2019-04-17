import { AUTH_USER, SIGN_OUT_USER } from "actions/types";
import { request } from "utils";

export const startSignupUser = (user, callback) => (dispatch) =>{

  return request("post", "/signup", {}, user)
      .then(res => {
        // setToken(res.data.token);
        dispatch({ type: AUTH_USER, payload: res.data });
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));

};

export const startSigninUser = (user, callback) => (dispatch) =>{
  return request("post", "/signin", {}, user)
      .then(res => {
        // setToken(res.data.token);
        dispatch({ type: AUTH_USER, payload: res.data });
        callback({error: false})
      })
      .catch(err => callback({error: true, msg: err}));

};

export const signOut = () => {
  return {
    type: SIGN_OUT_USER,
  }
};

