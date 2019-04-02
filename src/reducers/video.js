import { GET_RECOMMENDED_VIDEO, GET_VIDEOS, SEARCH_VIDEOS } from "actions/types";

const defaultState = {
  recommended: [],
  featured: {
    videos: [],
    offset: 0
  },
  searched: {
    query: "",
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

    case SEARCH_VIDEOS:
      return {
        ...state,
        searched: {
          ...state.searched,
          videos: state.searched.videos.concat(action.payload.videos),
          offset: state.searched.offset + action.payload.videos.length,
          query: action.payload.query
        }
      };

    default:
      return state;
  }
}

