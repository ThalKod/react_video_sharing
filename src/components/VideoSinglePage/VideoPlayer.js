import React from "react";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";

export default function(){
  return(
      <div className="sv-video">
        <Player
          src="https://cdn.filestackcontent.com/Cd1mB8L8Tt21TmyMSgav"
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
  )
}
