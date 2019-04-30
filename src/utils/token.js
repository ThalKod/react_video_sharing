import { store } from "App";

export const getRefreshToken = () => {
  return store.getState().auth.userToken;
};

export const loadToken = () => {
  try{
    const token = localStorage.getItem("token");

    if(token === null)
      return undefined;

    return token;
  }catch (e) {
    return undefined;
  }
};

export const setToken = (token) => {
  try{
    localStorage.setItem("token", token);
  }catch (e) {
    console.log("Internal Error: ", e);
  }
};

export const removeToken = () => {
  try{
    localStorage.removeItem("token");
  }catch (e) {
    console.log("Internal Error", e);
  }
};
