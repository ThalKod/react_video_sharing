import { GET_COMMENTS, ADD_COMMENTS, CLEAR_COMMENTS, ADD_REPLY } from "actions/types";

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

    case ADD_REPLY:
      return {
          ...state,
          comments: state.comments.map(comment => {
            if(comment._id === action.payload.parentId)
              comment.reply.push(action.payload.comment);
            return comment;
          })
      };


    case CLEAR_COMMENTS:
      return defaultState;

    default:
      return state;
  }
}
