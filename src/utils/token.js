import store from "store/configureStore";

export const getRefreshToken = () => {
  return store().getState().auth.userToken;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
