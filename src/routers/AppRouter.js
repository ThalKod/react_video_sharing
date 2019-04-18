import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch, } from "react-router-dom";

import HomePage from "components/Home/HomePage";
import NotFoundPage from "components/Common/NotFoundPage";
import RegistrationPage from "components/Register/RegistrationPage";
import UploadContainer from "components/Upload/UploadContainer";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import VideoSinglePage from "components/VideoSingle/VideoSinglePage";
import ChannelPage from "components/Channel/ChannelPage";
import Search from "components/Search/Search";

const AppRouter = () => (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route
              path="/signin"
              render={(props) => <RegistrationPage {...props} signup={false} />}
          />
          <Route
              path="/signup"
              render={(props) => <RegistrationPage {...props} signup />}
          />
          <Route path="/upload" component={UploadContainer}/>
          <Route path="/video/:id" render={(props) => (
              <VideoSinglePage key={props.match.params.id} {...props}/>
          )}/>
          <Route path="/channel/:id" render={(props) => (
              <ChannelPage key={props.match.params.id} {...props}/>
          )}/>
          <Route path="/search" component={Search}/>
          <Route component={NotFoundPage}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
);

export default AppRouter;
