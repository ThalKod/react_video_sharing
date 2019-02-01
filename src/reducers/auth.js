import { AUTH_USER } from "../actions/actionTypes";

export default (state={ userToken: "" }, action) => {
  switch(action.type){

    case AUTH_USER:
      return {...state, userToken: action.payload };

    default:
      return state;
  }
}
