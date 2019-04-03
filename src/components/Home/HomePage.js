import React from "react";
import { connect } from "react-redux";

import VideoSection from "components/Home/VideoSection";
import LoadingSpinner from "components/Common/LoadingSpinner";
import { startGetRecommendedVideo, startGetVideos } from "actions";

export class HomePage extends React.Component{

  state = {
    loading: true
  };

  componentDidMount = () => {
    const { getRecommendedVideo, getVideos, offset } = this.props;

    const getRecommendedVideoPromise = getRecommendedVideo();
    const getVideosPromise = getVideos({ offset });

    Promise.all([ getRecommendedVideoPromise , getVideosPromise ])
        .then(res => {
          if(res[0].error === false && res[1].error === false) this.setState({ loading: false });
        })
        .catch(err => console.log(err));
  };

  render(){
    const { loading } = this.state;
    const { recommendedVideos, featuredVideos, getVideos, offset } = this.props;

    // temp loading..
    if(loading) return <LoadingSpinner/>;

    return (
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
               <VideoSection recommendedVideos={recommendedVideos} type="Recommended" header />
               <VideoSection
                   featuredVideos={featuredVideos}
                   scrollable type="Featured"
                   header
                   getMoreVideos={() => getVideos({ offset })}
               />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendedVideos: state.video.recommended,
  featuredVideos: state.video.featured.videos,
  offset: state.video.featured.offset,
});

const mapDispatchToProps = (dispatch) => ({
    getRecommendedVideo: () => dispatch(startGetRecommendedVideo()),
    getVideos: (options) => dispatch(startGetVideos(options)),
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
