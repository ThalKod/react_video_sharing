import React from "react";
import { connect } from "react-redux";

import VideoSection from "./VideoSection";
import { startGetRecommendedVideo } from "../actions";

export class HomePage extends React.Component{

  state = {
    loading: true
  };

  componentDidMount = () => {
    const { getRecommendedVideo } = this.props;
    getRecommendedVideo((res) => {
      if(!res.error) this.setState({ loading: false })
    });
  };

  render(){
    const { loading } = this.state;

    // temp loading..
    if(loading) return <div>Loading...</div>;

    return (
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
               <VideoSection type="Recommended" />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendedVideo: (callback) => dispatch(startGetRecommendedVideo(callback))
  }
};

export default connect(null, mapDispatchToProps)(HomePage);
