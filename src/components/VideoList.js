import React from "react";
import VideoSingle from "./VideoSingle";

class VideoList extends React.Component{

  // temp state
  state = {
    video: [
      {
        name: "test",
        duration: 123314,
        viewsCount: 121232
      },
      {
        name: "test",
        duration: 123314,
        viewsCount: 121232
      },
      {
        name: "test",
        duration: 123314,
        viewsCount: 121232
      },
      {
        name: "test",
        duration: 123314,
        viewsCount: 121232
      }
    ]
  };

  renderVideo = () => {
    const { video } = this.state;
    return video.map(single => {
      return <VideoSingle { ...single}/>
    })
  };


  render(){
    return (
          <div className="cb-content videolist">
            <div className="row">
              {this.renderVideo()}
            </div>
          </div>
    )
  }
}

export default VideoList;
