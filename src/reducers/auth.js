import { AUTH_USER } from "../actions/actionTypes";

const defaultState = { userToken: localStorage.getItem("token") };

export default (state= defaultState, action) => {
  switch(action.type){

    case AUTH_USER:
      return {...state, userToken: action.payload };

    default:
      return state;
  }
}
