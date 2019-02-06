import { GET_USER } from "./actionTypes";
import axios from "axios";


export const startGetUserinfo = (token) => (dispatch) =>{
  axios.get("/api/v0/", { headers: { Authorization: `jwt ${token}` } })
      .then(res => {
        dispatch({ type: GET_USER, payload: res.data.id });
      })
      .catch(err => console.log(err));
};

