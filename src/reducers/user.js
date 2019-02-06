import { GET_USER } from "../actions/actionTypes";

const defaulState = { user: {id: ""}};

export default (state= defaulState, action) => {
  switch(action.type){

    case GET_USER:
      return {...state, id: action.payload };

    default:
      return state;
  }
}
