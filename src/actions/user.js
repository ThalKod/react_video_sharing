import axios from "axios";

import { GET_MY_INFO } from "./actionTypes";
import getRefreshToken from "../utils/index";

export const startGetMyInfo = (callback) => (dispatch) =>{
  axios.get("/api/v0/user/me", { headers: { Authorization: `${getRefreshToken()}` } })
      .then(res => {
        console.log("res===",res);
        dispatch({ type: GET_MY_INFO, payload: res.data });
        callback({error: false});
      })
      .catch(err => callback({error: true, mes: err}));
};

export const ne = () => {

}

