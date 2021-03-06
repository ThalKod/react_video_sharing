import React from "react";

import VideoSingle from "components/Home/VideoSingle";
import SimpleNote from "../Common/SimpleNote";

export default class VideoSection extends React.Component{

  renderVideoList = () => {
    const { recommendedVideos, featuredVideos, videos } = this.props;

    if(featuredVideos && featuredVideos.length > 0 ){
      return featuredVideos.map(video => {
        return <VideoSingle key={video._id} {...video} />
      })
    }

    if(recommendedVideos && recommendedVideos.length > 0){
      return recommendedVideos.map(video => {
        return <VideoSingle key={video._id} {...video} />
      })
    }

    if(videos && videos.length > 0) {
      return videos.map(video => {
        return <VideoSingle key={video._id} {...video} />
      })
    }

    return <SimpleNote text="No Videos found"/>;
  };

  onScroll = () => {
    const { getMoreVideos } = this.props;
    if (// TODO: refactor scrolling and implement a better infinite bottom scroll for this component. lets' keep this for this mvp...
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      getMoreVideos()
    }
  };

  componentDidMount = () => {
    const { scrollable } = this.props;
    if(!scrollable) return;
    window.addEventListener("scroll", this.onScroll, false);
  };

  componentWillUnmount = () => {
    const { scrollable } = this.props;
    if(!scrollable) return;
    window.removeEventListener("scroll", this.onScroll, false);
  };

  render() {
    const { type, header, query, videos } = this.props;
    if(videos && videos.length <= 0) return <SimpleNote text="No Videos found"/>;
    return (
        // TODO: make it more generics...
        <div className="content-block head-div">
          { header && <div className="cb-header">
                        <div className="row">
                          <div className="col-lg-10 col-sm-10 col-xs-8">
                            <ul className="list-inline">
                              {type === "Search" ?  <li>Results for "{query}"</li> : <li><a href="/" className="color-active">{type}</a></li>}
                            </ul>
                          </div>
                        </div>
                      </div> }
          <div className="cb-content videolist">
            <div className="row">
              {this.renderVideoList()}
            </div>
          </div>
        </div>
    )
  }
}

