export const isAuth = () => {
  return window.localStorage.getItem("token");
};

export const getRefreshToken = () => {
  return isAuth() ? window.localStorage.getItem("token") : "";
};
