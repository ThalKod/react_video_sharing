import { createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
      combineReducers({
        auth: authReducer,
      }),
      composeEnhancers(applyMiddleware(thunk))
  );
};
