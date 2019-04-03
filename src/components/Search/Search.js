import React from "react";
import { connect } from "react-redux";

import VideoSection from "components/Home/VideoSection";
import LoadingSpinner from "components/Common/LoadingSpinner";
// import SimpleNote from "components/Common/SimpleNote";
import { startSearchVideos } from "actions";

function Search({query, videos, loading, getMoreVideos, offset }){
    if(loading && query) return <LoadingSpinner/>;

    return (
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <VideoSection
                    videos={videos}
                    type="Search"
                    header
                    scrollable
                    query={query}
                    getMoreVideos={() => getMoreVideos({ offset }, query)}
                />
              </div>
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
  query: state.video.searched.query,
  offset: state.video.searched.offset,
  videos: state.video.searched.videos,
  found: state.video.searched.found,
  loading: state.video.searched.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getMoreVideos: (options, query) => dispatch(startSearchVideos(options, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

