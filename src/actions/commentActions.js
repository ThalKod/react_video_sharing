import { GET_COMMENTS } from "./types";
import {request} from "../utils";

export const getComment = ({ limit = 10, offset = 0}, id) => (dispatch) => {
  return request("get", `/comment/video/${id}?limit=${limit}&offset=${offset}`)
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};
        dispatch({ type: GET_COMMENTS, payload: res.data.comments });
        return { error: false };
      })
      .catch(err => {
        return { error: true, msg: err};
      });
};
