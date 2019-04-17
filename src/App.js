import React from "react";
import { Provider } from "react-redux";

import configureStore from "store/configureStore";
import { setToken } from "utils";
import AppRouter from "routers/AppRouter";

export const store = configureStore();
store.subscribe(() => {
  setToken(store.getState().auth.userToken);
});

export default function App(){
      return (
          <Provider store={store}>
            <div>
              <AppRouter/>
            </div>
          </Provider>
      )
};
