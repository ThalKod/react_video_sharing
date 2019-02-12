import store from "../store/configureStore";

const getRefreshToken = () => {
  return store().getState().auth.userToken;
};

export default getRefreshToken;
