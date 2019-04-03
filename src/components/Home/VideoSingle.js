import React from "react";
import { Link } from "react-router-dom";

import { request, formatSecondForRendering } from "utils";

// import videoPlaceholder from "../assets/images/video_placeholder.png";

class VideoSingle extends React.Component{

  state = {
    videoImage: null,
    // videoThumbnails: null,
  };

  componentDidMount = () => {
    const { _id } = this.props;

    request("get", `/video/cover/default/${_id}`)
        .then(res => {
          if(!res.data.error) this.setState({ videoImage: res.data.coverPhoto })
        })
        .catch(err => console.log(err));
  };

  render(){
    const { name, duration, viewCount, _id } = this.props;
    const { videoImage } = this.state;

    return (
        <div className="col-lg-3 col-sm-6 videoitem">
          <div className="b-video">
            <div className="v-img">
              <Link to={`/video/${_id}`}><img src={videoImage} alt="videoimage" /></Link>
              <div className="time">{formatSecondForRendering(duration)}</div>
            </div>
            <div className="v-desc">
              <Link to={`/video/${_id}`}>{name}</Link>
            </div>
            <div className="v-views">
              {viewCount} views.
            </div>
          </div>
        </div>
    )
  }
}

export default VideoSingle;

