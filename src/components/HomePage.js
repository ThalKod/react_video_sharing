import React from "react";
// import axios from "axios";
import { connect } from "react-redux";
import VideoSingle from "./VideoSingle";


export class HomePage extends React.Component{

  componentDidMount = () => {
    // const { getUser, token } = this.props;
    // getUser(token);
  };

  render(){
    return (
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <VideoSingle/>
                <VideoSingle/>
                <VideoSingle/>
                <VideoSingle/>
              </div>
            </div>
          </div>
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
