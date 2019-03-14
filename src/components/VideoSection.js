import React from "react";
import { connect } from "react-redux";

import VideoSingle from "./VideoSingle";

class VideoSection extends React.Component{

  renderVideoList = () => {
    const { videos } = this.props;

    return videos.map(video => {
      return <VideoSingle key={video._id} {...video} />
    })
  };

  render() {
    const { type } = this.props;
    return (
        <div className="content-block head-div">
          <div className="cb-header">
            <div className="row">
              <div className="col-lg-10 col-sm-10 col-xs-8">
                <ul className="list-inline">
                  <li><a href="/" className="color-active">{type}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cb-content videolist">
            <div className="row">
              {this.renderVideoList()}
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  videos: state.video.recommended,
});

export default connect(mapStateToProps)(VideoSection);
