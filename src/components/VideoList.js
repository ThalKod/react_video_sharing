import React from "react";
import VideoSingle from "./VideoSingle";


const VideoList = ({ videos }) => {

  const renderVideo = () => {
    return videos.map((singleVideo) => {
      return <VideoSingle key={singleVideo._id} { ...singleVideo}/>
    })
  };

  return (
      <div className="cb-content videolist">
        <div className="row">
          {renderVideo()}
        </div>
      </div>
  )
};

export default VideoList;
