import { GET_MY_INFO, AUTH_USER } from "../actions/actionTypes";

const defaultState = { username: "", email: "" };

export default (state= defaultState, action) => {
  switch(action.type){

    case GET_MY_INFO:
      return {...state,  ...action.payload.user };

    case AUTH_USER:
      return {...state, ...action.payload.user };

    default:
      return state;
  }
}
