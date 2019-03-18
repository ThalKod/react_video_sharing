import React from "react";

import VideoPlayer from "./VideoPlayer";
import { request } from "../../utils";


export default class VideoSinglePage extends React.Component{

  state = {
    videoUrl: "",
  };

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;

    request("get", `/video/${id}`)
        .then((res) => {
          this.setState({ videoUrl: res.data.video.url})
        })
        .catch(err => console.log(err));
  };

  render(){
    const { videoUrl } = this.state;

    return(
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xs-12 col-sm-12">
                <VideoPlayer videoUrl={videoUrl}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
