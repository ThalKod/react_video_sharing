import React from "react";

export default class RegistrationForm extends React.Component{
  render(){
    return (
        <div className="login-window">
          <div className="l-head">
            Log into Your Circle Account
          </div>
          <div className="l-form">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="sample@gmail.com"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="**********"/>
              </div>
              <div className="checkbox">
                <label>
                  <label className="checkbox">
                    <input type="checkbox" name="#"/>
                      <span className="arrow"></span>
                  </label> <span>Remember me on this computer</span>
                  <span className="text2">(not recomended on public or shared computers)</span>
                </label>
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <button type="submit" className="btn btn-cv1">Login</button>
                </div>
                <div className="col-lg-1 ortext">or</div>
                <div className="col-lg-4 signuptext"><a href="signup.html">Sign Up</a></div>
              </div>
              <div className="row">
                <div className="col-lg-12 forgottext">
                  <a href="#">Forgot Username or Password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
