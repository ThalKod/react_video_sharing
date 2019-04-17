import { createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import authReducer from "reducers/auth"
import userReducer from "reducers/user";
import videoReducer from "reducers/video";
import commentReducer from "reducers/comment";
import { loadToken } from "utils";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  auth: { userToken: loadToken()}
};

export default () => {
  return createStore(
      combineReducers({
        auth: authReducer,
        user: userReducer,
        video: videoReducer,
        comment: commentReducer
      }),
      initialState,
      composeEnhancers(applyMiddleware(thunk))
  );
};
