import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch, } from "react-router-dom";

import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = ()=>(
    <Router>
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
);

export default AppRouter;
