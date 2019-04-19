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

import { request } from "utils";

export default class VideoPlayer extends React.Component{

  constructor(props){
    super(props);
    this.playerRef = React.createRef();
    this.state = { viewState: false }
  };

  componentDidMount = () => {
    this.playerRef.current.subscribeToStateChange(this.handleStateChange);
  };

  handleStateChange = ({ duration, currentTime }) => {
    if(currentTime > (0.05 * duration )){ // If the user watch at least 5% of the videos
      const { viewState } = this.state;
      if(!viewState) this.addAView();
    }
  };

  addAView = () => {
    const { id } = this.props;

    request("post", `/video/${id}/view`)
        .then(res => {
          if(!res.data.error) return this.setState({ viewState: true});
          return console.log(res.data.msg);
        })
        .catch(err => console.log(err));
  };

  render(){
    const { videoUrl } = this.props;

    return(
        <div className="sv-video">
          <Player
              src={videoUrl}
              autoplay
              ref={this.playerRef}
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
}
