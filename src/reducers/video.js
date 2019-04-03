import { GET_RECOMMENDED_VIDEO, GET_VIDEOS, SEARCH_VIDEOS, INITIATE_SEARCH_VIDEOS } from "actions/types";

const defaultState = {
  recommended: [],
  featured: {
    videos: [],
    offset: 0
  },
  searched: {
    query: "",
    videos: [],
    offset: 0,
    loading: true,
    found: false
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
          videos: action.payload.videos.videos, // Set whole new videos at each new search
          offset: state.searched.offset + action.payload.videos.videos.length,
          found: action.payload.videos.found, // Did we find videos ??
          loading: false
        }
      };

    case INITIATE_SEARCH_VIDEOS :
      return { ...state, searched: {...state, loading: true, query: action.payload.query }};

    default:
      return state;
  }
}

