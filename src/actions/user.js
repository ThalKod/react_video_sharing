import { GET_MY_INFO } from "./actionTypes";
import { request } from "../utils";

export const startGetMyInfo = (callback) => (dispatch) =>{
  return request("get", "/user/me")
      .then(res => {
        dispatch({ type: GET_MY_INFO, payload: res.data });
        callback({error: false});
      })
      .catch(err => callback({error: true, mes: err}));
};

