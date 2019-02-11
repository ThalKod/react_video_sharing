import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import AppRouter from "./routers/AppRouter";


export default function App(){
      return (
          <Provider store={configureStore()}>
            <div>
              <AppRouter/>
            </div>
          </Provider>
      )
};
