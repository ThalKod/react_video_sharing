import React from "react";

import { request } from "utils";
import VideoSingle from "components/HomePage/VideoSingle";

export default class SimilarVideos extends React.Component{

  state = {
    videos: [],
    loading: true,
  };

  componentDidMount = () => {
    const { id } = this.props;

    request("get", `/video/${id}/similar`)
        .then(res => {
          this.setState({ videos: res.data.videos, loading: false })
        })
        .catch(err => console.log(err));
  };

  renderVideos = () => {
    const { videos } = this.state;

    return videos.map((video) => {
      return <VideoSingle key={video._id} {...video}/>
    })
  };

  render(){
    const { loading, videos } = this.state;

    if(loading) return <div>Loading...</div>;

    if(videos.length <= 0) return null; // We don't show the similar videos section if we didn't find any

    return(
        <div>
          <div className="caption">
            <div className="left">
              <a href="/">Similar Videos</a>
            </div>
            <div className="clearfix"/>
          </div>
          <div className="list similar-videos">
            <div className="row">
              {this.renderVideos()}
            </div>
          </div>
        </div>
    )
  }
}
