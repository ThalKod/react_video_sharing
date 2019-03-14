import { GET_RECOMMENDED_VIDEO, GET_VIDEOS } from "./types";
import { request } from "../utils";

export const startGetRecommendedVideo = () => (dispatch) => {
  return request("get", "/video/list/recommended")
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};

        dispatch({ type: GET_RECOMMENDED_VIDEO, payload: res.data.videos });
        return { error: false };
      })
      .catch(err => {
        return { error: true, msg: err};
      });
};

export const startGetVideos = ({ limit = 10, offset = 0 }) => (dispatch) => {
  return request("get", `/video/list?limit=${limit}&offset=${offset}`)
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};
        dispatch({ type: GET_VIDEOS, payload: res.data.videos });
        return { error: false };
      })
      .catch(err => {
        return { error: true, msg: err};
      });
};
