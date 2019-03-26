import { GET_COMMENTS } from "../actions/types";

const defaultState = {
  offset: 0,
  comment: []
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case GET_COMMENTS:
      return { ...state, comment: state.comment.concat(action.payload), offset: this.comment.length};

    default:
      return state;
  }
}
