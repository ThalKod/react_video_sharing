import React from "react";
// import axios from "axios";
import { connect } from "react-redux";


class HomePage extends React.Component{

  componentDidMount = () => {
    // const { getUser, token } = this.props;
    // getUser(token);
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

/* const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (token) => dispatch(startGetUserinfo(token))
  }
}; */

export default connect(mapStateToProps)(HomePage);
