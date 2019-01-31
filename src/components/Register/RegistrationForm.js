import React from "react";
import { Link } from "react-router-dom"

export default class RegistrationForm extends React.Component{
  render(){
    const { signup } = this.props;
    return (
        <div className="login-window">
          {signup ?
              <div className="l-head">
                Sign Up for Free
              </div> :
              <div className="l-head">
                Log in to your Circle Account
              </div>
          }

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
              {signup && (
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Re-type Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="**********"/>
                  </div>
              )}
              <div className="checkbox">
                <label>
                  <label className="checkbox">
                    <input type="checkbox" name="#"/>
                      <span className="arrow"></span>
                  </label> <span>Remember me on this computer</span>
                  <span className="text2">(not recommended on public or shared computers)</span>
                </label>
              </div>
              <div className="row">
                {signup ?
                    <div>
                      <div className="col-lg-7">
                        <button type="submit" className="btn btn-cv1">Sign Up</button>
                      </div>
                      <div className="col-lg-1 ortext">or</div>
                      <div className="col-lg-4 signuptext">
                        <Link to="/signin">Login</Link>
                      </div>
                    </div>   :
                    <div>
                      <div className="col-lg-7">
                        <button type="submit" className="btn btn-cv1">Login</button>
                      </div>
                      <div className="col-lg-1 ortext">or</div>
                      <div className="col-lg-4 signuptext">
                        <Link to="/signup">Sign Up</Link>
                      </div>
                    </div>
                }
              </div>
              <div className="row">
                <div className="col-lg-12 forgottext">
                  { signup ?
                      <a href="#">By clicking "Sign Up" I agree to circle's Terms of Service.</a> :
                      <a href="#">Forgot Username or Password?</a>
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
