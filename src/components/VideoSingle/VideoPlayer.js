import React from "react";
import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
  PlaybackRateMenuButton,
  VolumeMenuButton } from "video-react";

export default function({ videoUrl }){
  return(
      <div className="sv-video">
        <Player
          src={videoUrl}
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar>
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={2.1} />
            <ReplayControl seconds={10} order={2.2}/>
            <ForwardControl seconds={10} order={3.2} />
            <VolumeMenuButton vertical/>
          </ControlBar>
        </Player>
      </div>
  )
}
