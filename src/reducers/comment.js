import { GET_COMMENTS, ADD_COMMENTS } from "../actions/types";

const defaultState = {
  offset: 0,
  comments: []
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case GET_COMMENTS:
      return {
        ...state,
        comments: state.comments.concat(action.payload),
        offset: state.offset + action.payload.length
      };

    case ADD_COMMENTS:
      return {
          ...state,
          comments: [ action.payload, ...state.comments],
          offset: state.offset + 1
      };

    default:
      return state;
  }
}
