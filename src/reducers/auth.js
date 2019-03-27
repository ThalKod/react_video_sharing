import { AUTH_USER, SIGN_OUT_USER } from "actions/types";

const defaultState = { userToken: localStorage.getItem("token") || "" };

export default (state= defaultState, action) => {
  switch(action.type){

    case AUTH_USER:
      return {...state, userToken: action.payload.token };

    case SIGN_OUT_USER:
      return {...state, userToken: "" };

    default:
      return state;
  }
}
