import React from "react";
import { connect } from "react-redux";

import VideoPlayer from "./VideoPlayer";
import VideoSingleTab from "./VideoSingleTab";
import AuthorSection from "./AuthorSection";
import VideoDescription from "./VideoDescription";
import { request } from "../../utils";

class VideoSinglePage extends React.Component{

  state = {
    videoUrl: "",
    currentVideoId: null,
    nextVideos: [],
    name: "",
    viewCount: 0,
    description: "",
    tags: [],
    author: null,
    createdAt: 0
  };

  renderUpNextVideo = () => {
    const { upNext } = this.props;
    const { currentVideoId, nextVideos } =  this.state;

    let filtered;
    if(upNext.length !== 0){
      filtered = upNext.filter(video => video._id !== currentVideoId);
    }else{
      filtered = nextVideos.filter(video => video._id !== currentVideoId);
    }

    return filtered.map(video => {
      return <VideoSingleTab
          key={video._id}
          id={video._id}
          videoDefaultCover={video.videoDefaultCover}
          duration={video.duration}
          name={video.name}
          viewCount={video.viewCount}
      />
    });
  };

  componentDidMount = () => {
    const { match: { params: { id } }, upNext } = this.props;

    request("get", `/video/${id}`)
        .then((res) => {
          const {
            url,
            _id,
            name,
            viewCount,
            description,
            tags,
            author,
            createdAt, } = res.data.video;
          this.setState({ videoUrl: url, currentVideoId: _id, name, viewCount, description, tags, author , createdAt })
        })
        .catch(err => console.log(err));

    if(upNext.length === 0){
      request("get", "/video/list?limit=10")
          .then(res => this.setState({ nextVideos: res.data.videos}))
          .catch(err => console.log(err));
    }
  };

  render(){
    const { videoUrl, name, viewCount, description, tags, author, createdAt } = this.state;

    return(
        <div className="single-video">
          <div className="content-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-xs-12 col-sm-12">
                  <VideoPlayer videoUrl={videoUrl}/>
                  <h1>{name}</h1>
                  {author && <AuthorSection author={author} viewCount={viewCount}/>}
                  <VideoDescription createdAt={createdAt} description={description} tags={tags}/>
                </div>
                <div className="col-lg-4 col-xs-12 col-sm-12">
                  <div className="caption">
                    <div className="left">Up Next</div>
                    <div className="clearfix"/>
                  </div>
                  <div className="list">
                    {this.renderUpNextVideo()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {upNext: state.video.featured.videos} // Just taking the recomended video as upnext :)
};

export default connect(mapStateToProps)(VideoSinglePage);
