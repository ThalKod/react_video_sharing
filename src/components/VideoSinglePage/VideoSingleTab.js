import React from "react";

import VideoPlaceholder from "../../assets/images/video_placeholder.png";

export default function () {
  return(
      <div className="h-video row">
        <div className="col-lg-6 col-sm-6">
          <div className="v-img">
            <a href="/"><img src={VideoPlaceholder} alt=""/></a>
            <div className="time">15:19</div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="v-desc">
            <a href="/">Battlefield 3: Official Fault Line Gameplay</a>
          </div>
          <div className="v-views">
            2,729,347 views
          </div>
          <div className="v-percent"><span className="v-circle"/> 55%</div>
        </div>
        <div className="clearfix"/>
      </div>
  );
}
