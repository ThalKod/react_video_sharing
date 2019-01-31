import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch, } from "react-router-dom";

import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import RegistrationPage from "../components/Register/RegistrationPage";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const AppRouter = ()=>(
    <Router>
      <div>
        <Header/>
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
        <Footer/>
      </div>
    </Router>
);

export default AppRouter;
