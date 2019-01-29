import { createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import baseReducer from "../reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
      combineReducers({
        ex: baseReducer,
      }),
      composeEnhancers(applyMiddleware(thunk))
  );
};
