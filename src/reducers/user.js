import { GET_USER } from "../actions/actionTypes";

const defaultState = { user: {id: ""}};

export default (state= defaultState, action) => {
  switch(action.type){

    case GET_USER:
      return {...state, id: action.payload };

    default:
      return state;
  }
}
