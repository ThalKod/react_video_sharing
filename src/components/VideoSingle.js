import React from "react";

import videoPlaceholder from "../assets/images/video_placeholder.png";

export default ({ name, duration, viewCount }) => {
  return (
      <div className="col-lg-3 col-sm-6 videoitem">
        <div className="b-video">
          <div className="v-img">
            <a href="/"><img src={videoPlaceholder} alt="placeholder" /></a>
            <div className="time">{duration}</div>
          </div>
          <div className="v-desc">
            <a href="/">{name}</a>
          </div>
          <div className="v-views">
            {viewCount} views.
          </div>
        </div>
      </div>
  )
}
