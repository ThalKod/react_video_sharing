import { AUTH_USER } from "../actions/actionTypes";

const defaulState = { userToken: localStorage.getItem("token") };

export default (state= defaulState, action) => {
  switch(action.type){

    case AUTH_USER:
      return {...state, userToken: action.payload };

    default:
      return state;
  }
}
