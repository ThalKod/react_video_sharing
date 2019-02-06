import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { startGetUserinfo } from "../actions/index";


class HomePage extends React.Component{

  componentDidMount = () => {
    this.props.getUser(this.props.token);
  };

  render(){
    return (
        <div>
          Homepage !
        </div>
    )
  }
};

const mapStateToProps = (state) =>({
  token: state.auth.userToken
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (token) => dispatch(startGetUserinfo(token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);