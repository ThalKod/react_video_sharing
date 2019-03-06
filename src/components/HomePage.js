import React from "react";
import { connect } from "react-redux";

import VideoSection from "./VideoSection";

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
               <VideoSection />
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
