import { GET_RECOMMENDED_VIDEO } from "./types";
import { request } from "../utils";

export const startGetRecommendedVideo = (callback) => (dispatch) => {
  return request("get", "/video/list/recommended")
      .then(res => {
        if(res.error) callback({ error: true, msg: res.msg});

        dispatch({ type: GET_RECOMMENDED_VIDEO, payload: res.videos });
        callback({ error: false });
      })
      .catch(err => callback({ error: true, msg: err}));
};
