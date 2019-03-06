import React from "react";
import VideoList from "./VideoList";

class VideoSection extends React.Component{

  state = {
    categories: "Featured",
  };

  render() {
    const { categories } = this.state;
    return (
        <div className="content-block head-div">
          <div className="cb-header">
            <div className="row">
              <div className="col-lg-10 col-sm-10 col-xs-8">
                <ul className="list-inline">
                  <li><a href="/" className="color-active">{categories}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <VideoList/>
          <VideoList/>
        </div>
    )
  }
}

export default VideoSection;
