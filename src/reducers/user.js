import { GET_MY_INFO, AUTH_USER, SIGN_OUT_USER } from "actions/types";

const defaultState = { username: "", email: "", _id: "" };

export default (state= defaultState, action) => {
  switch(action.type){

    case GET_MY_INFO:
      return {...state,  ...action.payload.user };

    case AUTH_USER:
      return {...state, ...action.payload.user };

    case SIGN_OUT_USER:
      return {...state, username: "", email: "" };


    default:
      return state;
  }
}
