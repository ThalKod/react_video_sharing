import React from "react";
import { connect } from "react-redux";

import VideoSection from "components/Home/VideoSection";
import LoadingSpinner from "components/Common/LoadingSpinner";
import SimpleNote from "components/Common/SimpleNote";

function Search({query, videos, found, loading}){
    if(loading && query) return <LoadingSpinner/>;

    return (
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                { found ?
                      <VideoSection
                      videos={videos}
                      getMoreVideos={() => console.log("Should get more videos")}
                      />
                    :
                    <SimpleNote text="No Videos found. Please try again with new words..."/>
                }
              </div>
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
  query: state.video.searched.query,
  videos: state.video.searched.videos,
  found: state.video.searched.found,
  loading: state.video.searched.loading,
});

export default connect(mapStateToProps)(Search);

