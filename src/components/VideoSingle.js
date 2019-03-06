import React from "react";

import videoPlaceholder from "../assets/images/video_placeholder.png";

export default () => {
  return (
      <div className="col-lg-3 col-sm-6 videoitem">
        <div className="b-video">
          <div className="v-img">
            <a href="/"><img src={videoPlaceholder} alt="placeholder" /></a>
            <div className="time">3:50</div>
          </div>
          <div className="v-desc">
            <a href="/">Man's Sky: 21 Minutes of New Gameplay - IGN First</a>
          </div>
          <div className="v-views">
            27,548 views. <span className="v-percent"><span className="v-circle"/> 78%</span>
          </div>
        </div>
      </div>
  )
}
