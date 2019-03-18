import React from "react";

import VideoPlayer from "./VideoPlayer";

export default function VideoSinglePage(){
  // const { match: { params: { id } } } = props;
  return(
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xs-12 col-sm-12">
              <VideoPlayer/>
            </div>
          </div>
        </div>
      </div>
  )
}
