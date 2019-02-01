import React from "react";

import RegistrationForm from "../Register/RegistrationForm";
import bgLogin from "../../assets/images/login.jpg";

export default class RegistrationPage extends React.Component {

  render(){
    return (
        <div>
          <div className="container-fluid bg-image">
            <div className="row">
              <div className="login-wraper">
                <img src={bgLogin} alt="bg-login"/>
                <div className="banner-text">
                  <div className="line"></div>
                  <div className="b-text">
                    Watch <span className="color-active">and<br /> upload</span> <span className="color-b1">v</span><span className="color-b2">i</span><span className="color-b3">de</span><span className="color-active">os</span> for free.
                  </div>
                </div>
                <RegistrationForm signup={this.props.signup} submit={() => this.props.history.push("/")} />
              </div>
            </div>
          </div>
        </div>
    )
  }
}
