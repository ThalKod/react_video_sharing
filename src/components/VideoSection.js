import React from "react";
import { connect } from "react-redux";

import VideoList from "./VideoList";

class VideoSection extends React.Component{

  renderVideoList = () => {
    const { videos } = this.props;

    // split the video array into four then map over it...
    const splited = videos.reduce((result, value, index, array) => {
      if(index % 4 === 0) result.push(array.slice(index, index + 4));
      return result;
    }, []);

     return splited.map((splitedVideos, index) => {
      return <VideoList key={index} videos={splitedVideos}/>
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
          {this.renderVideoList()}
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  videos: state.video.recommended,
});

export default connect(mapStateToProps)(VideoSection);
