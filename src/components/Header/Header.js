import React from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import Avatar from "./Avatar";
import bulbLight from "../../assets/images/icon_bulb_light.png";
import logo from "../../assets/images/logo.svg";
import { startGetMyInfo } from "../../actions/index";

class Header extends React.Component{

  state = {
    loggedIn: false
  };

  componentDidMount = () => {
    const { token, getMyInfo } = this.props;
    if(token) {
      getMyInfo((res) => {
        if(!res.error) return this.setState({ loggedIn: true});
        return console.error(res.msg);
      });
    }
  };

  componentDidUpdate = (prevProps) => {
    const { token } = this.props;
    if(prevProps.token !== token){
      this.setState( prevStates => ({
        loggedIn: !prevStates.loggedIn
      }))
    }
  };

  render() {
    const { loggedIn } = this.state;
    const {username} = this.props;
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="btn-color-toggle">
              <img src={bulbLight} alt="light bulb"/>
            </div>
            <div className="navbar-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-sm-2 col-xs-2">
                    <Link to="/" className="navbar-brand">
                      <img src={logo} alt="Circle Logo" className="logo"/>
                    </Link>
                  </div>
                  <div className="visible-xs visible-sm clearfix"/>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <SearchBar/>
                  </div>
                  <div className="visible-xs clearfix"/>
                  <div className="col-lg-2 col-sm-4  col-xs-8">
                    <div className="pull-right">
                      {loggedIn ? <Avatar username={username} /> :
                          <div className="loginsignup">
                            <Link to="/signin">Login</Link> . <Link to="/signup">Signup</Link>
                          </div>
                      }
                    </div>
                    <div className="clearfix"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.userToken,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  getMyInfo: (callback) => dispatch(startGetMyInfo(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
