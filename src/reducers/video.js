import { GET_RECOMMENDED_VIDEO } from "../actions/types";

const defaultState = { recommended: [] };

export default (state = defaultState, action) => {
  switch(action.type){

    case GET_RECOMMENDED_VIDEO:
      return { ...state, recommended: action.payload };

    default:
      return state;
  }
}
