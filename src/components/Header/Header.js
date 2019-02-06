import React from 'react';
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar";
import Avatar from "./Avatar";
import bulbLight from "../../assets/images/icon_bulb_light.png";
import logo from "../../assets/images/logo.svg";

export default class Header extends React.Component{
  render(){
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="btn-color-toggle">
              <img src={bulbLight}/>
            </div>
            <div className="navbar-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-sm-2 col-xs-2">
                    <Link to="/" className="navbar-brand">
                      <img src={logo} alt="Circle Logo" className="logo"/>
                    </Link>
                  </div>
                  <div className="visible-xs visible-sm clearfix"></div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <SearchBar />
                  </div>
                  <div className="visible-xs clearfix"></div>
                  <div className="col-lg-2 col-sm-4  col-xs-8">
                    <div className="loginsignup pull-right">
                      <Link to="/signin">Login</Link> . <Link to="/signup">Signup</Link>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}