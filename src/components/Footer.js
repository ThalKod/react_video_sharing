
import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import loveIcon from "../assets/images/like.png";


export default function Footer(){
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="container padding-def">
              <div className="col-lg-1  col-sm-2 col-xs-12 footer-logo">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Circle logo" className="logo"/></Link>
              </div>
              <div className="col-lg-7  col-sm-7 col-xs-12">
                <p><i>Inspired from Circle's <a href="https://www.azyrusthemes.com">Azyrus Themes</a></i></p>
                <div className="delimiter"/>
                <div className="f-copy">
                  <p><i>Ⓒ Copyrights 2019 - Made with <img src={loveIcon} alt="love icon"/> By <a href="https://www.thal.tech">Thal Marcelin</a></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
