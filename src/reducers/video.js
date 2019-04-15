import {
  GET_RECOMMENDED_VIDEO,
  GET_VIDEOS,
  SEARCH_VIDEOS_SUCCESS,
  SEARCHING_VIDEOS,
  CLEAR_SEARCH
} from "actions/types";

export const defaultState = {
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

    case SEARCHING_VIDEOS:
      return { ...state, searched: {...state.searched, loading: true, query: action.payload.query }};

    case SEARCH_VIDEOS_SUCCESS:
      return {
        ...state,
        searched: {
          ...state.searched,
          loading: false,
          query: action.payload.query,
          found: action.payload.videos.found,
          videos: state.searched.query !== action.payload.query ? action.payload.videos.videos : state.searched.videos.concat(action.payload.videos.videos),
          offset: state.searched.offset + action.payload.videos.videos.length
        }
      };

    case CLEAR_SEARCH:
      return {...state, searched: defaultState.searched};

    default:
      return state;
  }
}

