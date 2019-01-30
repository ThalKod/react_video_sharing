import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch, } from "react-router-dom";

import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import RegistrationPage from "../components/RegistrationPage"

const AppRouter = ()=>(
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route
            path="/signin"
            render={(props) => <RegistrationPage {...props} signin={true} />}
        />
        <Route
            path="/signup"
            render={(props) => <RegistrationPage {...props} signin={false} />}
        />
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
);

export default AppRouter;
