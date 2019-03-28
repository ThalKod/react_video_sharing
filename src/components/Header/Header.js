import React from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux";

import SearchBar from "components/Header/SearchBar";
import Avatar from "components/Header/Avatar";
import bulbLight from "assets/images/icon_bulb_light.png";
import logo from "assets/images/logo.svg";
import { signOut, startGetMyInfo } from "actions";

export class Header extends React.Component{

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

  renderAvatarAndOthers = () => {
    const { username, signOutUser, id} = this.props;
    return (
        <div className="flex">
          <Link to={`/channel/${id}`}>
            <Avatar username={username} />
          </Link>
          <button className="unStyledButton" type="submit" onClick={signOutUser}>Sign Out</button>
          <Link className="upload-button" to="/upload"><i className="cv cvicon-cv-upload-video"/></Link>
        </div>
    )
  };

  render() {
    const { loggedIn } = this.state;
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
                      {loggedIn ? this.renderAvatarAndOthers() :
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
  id: state.user._id,
});

const mapDispatchToProps = (dispatch) => ({
  getMyInfo: (callback) => dispatch(startGetMyInfo(callback)),
  signOutUser: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
