import { GET_RECOMMENDED_VIDEO, GET_VIDEOS, SEARCH_VIDEOS } from "actions/types";
import { request } from "utils";

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

export const startGetVideos = ({ limit = 16, offset = 0 }) => (dispatch) => {
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

// Async action creator to search a videos by text
export const startSearchVideos = ({ limit = 16, offset = 0 }, query) => (dispatch) => {
  return request("post", `/video/search?limit=${limit}&offset=${offset}`, {}, { query })
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};
        dispatch({ type: SEARCH_VIDEOS, payload: { videos: res.data.videos, query } });
        return { error: false };
      })
      .catch(err => {
        return { error: true, msg: err};
      });
};
