import { createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/auth"
import userReducer from "../reducers/user";
import videoReducer from "../reducers/video";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
      combineReducers({
        auth: authReducer,
        user: userReducer,
        video: videoReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
  );
};
