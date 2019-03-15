import { GET_RECOMMENDED_VIDEO, GET_VIDEOS } from "../actions/types";

const defaultState = {
  recommended: [],
  featured: {
    videos: [],
    offset: 0
  }
};

const getVideos = (state, action) => {
  const { videos, offset } = state.featured;
  const { payload } = action;
  return { ...state, featured: { ...state.featured, videos: videos.concat(payload), offset: offset + payload.length } };
};

export default (state = defaultState, action) => {
  switch(action.type){

    case GET_RECOMMENDED_VIDEO:
      return { ...state, recommended: action.payload };

    case GET_VIDEOS:
      return getVideos(state, action);

    default:
      return state;
  }
}

