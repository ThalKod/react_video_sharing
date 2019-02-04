import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { startSignupUser } from "../../actions/auth";

class RegistrationForm extends React.Component{

  state = {
    email: "",
    password: "",
    passwordVerification: "",
    errorPass: false,
    errorEmail: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.props.signup){
      const { email, password, passwordVerification } = this.state;
      if(passwordVerification !== password) return this.setState({ errorPass: true});

      this.props.signupUser({ email, password }, (res) => {
        if(!res.error) this.props.submit();
      })
    }
  };

  checkEmail = () => {
    axios.post("/api/v0/check/email", { email: this.state.email })
        .then(res => {
          if(!res.data.error){
            if(!res.data.valid) return this.setState({ errorEmail: true });
          }
        })
        .catch(err => console.log(err));
  };

  passwordMatch = () => {
    const { password, passwordVerification } = this.state;
    if(passwordVerification !== password) return this.setState({ errorPass: true});
  };

  render(){

    console.log(this.props);
    const { signup } = this.props;
    const { errorEmail, errorPass, passwordVerification, password, email } = this.state;
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
                <label  htmlFor="exampleInputEmail1">Email</label>
                {errorEmail && <p style={{ color: "red"}}>Already registered with that email, please try signin !</p>}
                <input
                    value={email}
                    onChange={e => this.setState({ email: e.target.value, errorEmail: false })}
                    onBlur={this.checkEmail}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="sample@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    value={password}
                    onChange={e => this.setState({ password : e.target.value, errorPass: false })}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="**********"
                />
              </div>
              {signup && (
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Re-type Password</label>
                    <input
                        value={passwordVerification}
                        onChange={e => this.setState({ passwordVerification : e.target.value })}
                        onBlur={this.passwordMatch}
                        onFocus={() => this.setState({errorPass: false})}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                        placeholder="**********"
                    />
                  </div>
              )}
              {errorPass && <p style={{ color: "red" }}>Password don't match !</p>}
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
                        <button onClick={this.handleSubmit} disabled={ errorPass || errorEmail || !email || !password || !passwordVerification} type="submit" className="btn btn-cv1">Sign Up</button>
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

const mapDispatchToProps = (dispatch) =>({
  signupUser: (user, callback) => dispatch(startSignupUser(user, callback)),
});

export default connect(null , mapDispatchToProps)(RegistrationForm);
