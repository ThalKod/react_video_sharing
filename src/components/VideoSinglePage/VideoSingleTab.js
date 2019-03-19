import React from "react";
import axios from "axios";

// import VideoPlaceholder from "../../assets/images/video_placeholder.png";
import { request, formatSecondForRendering } from "../../utils";


export default class VideoSingleTab extends React.Component{

  signal = axios.CancelToken.source();

  state = {
    videoImage: ""
  };

  componentDidMount = () => {
    const { id } = this.props;
    request("get", `/video/cover/default/${id}`, { cancelToken: this.signal.token })
        .then(res => {
          if(!res.data.error) this.setState({ videoImage: res.data.coverPhoto })
        })
        .catch(err => console.log(err));
  };

  componentWillUnmount = () => {
    this.signal.cancel('request canceled');
  };

  render(){
    const { name, duration, viewCount } = this.props;
    const { videoImage } = this.state;

    return(
        <div className="h-video row">
          <div className="col-lg-6 col-sm-6">
            <div className="v-img">
              <a href="/"><img src={videoImage} alt=""/></a>
              <div className="time">{formatSecondForRendering(duration)}</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="v-desc">
              <a href="/">{name}</a>
            </div>
            <div className="v-views">{viewCount} Views</div>
          </div>
          <div className="clearfix"/>
        </div>
    );
  }
}



