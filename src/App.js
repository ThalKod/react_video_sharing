import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import AppRouter from "./routers/AppRouter";

export default class App extends React.Component {
    render() {
      return (
          <Provider store={configureStore()}>
            <AppRouter/>
          </Provider>
      )
    }
};
