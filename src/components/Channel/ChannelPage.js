import React from "react";

import { request } from "utils";
import Subscriber from "components/Subscriber";

// import VideoSection from "components/HomePage/VideoSection";
import LoadingSpinner from "components/Common/LoadingSpinner";

import tempBanner from "assets/images/channel-banner.png";
// import Avatar  from "components/Header/Avatar";
import tempUser from "assets/images/channel-user.png";
import VideoSection from "components/Home/VideoSection";
import ChannelSection from "components/Channel/ChannelSection";

class ChannelPage extends React.Component{

  state = {
    videosState: {
      videos: [],
      offset: 0,
      loading: true
    },
    channelsState: {
      channels: [],
      offset: 0,
      loading: true
    },
    tab: "videos",
    username: ""
  };

  getVideos = () => {
    const { match: { params: { id } } } = this.props;
    const { videosState: { offset } } = this.state;

    request("get", `/video/list/user/${id}?limit=8&offset=${offset}`)
        .then(({ data }) => {
          if(!data.error) {
            return this.setState((prevState) => {
              return {
                videosState: {
                  ...prevState.videosState,
                  videos: prevState.videosState.videos.concat(data.videos),
                  offset: prevState.videosState.offset + data.videos.length,
                  loading: false
                },
              }
            });
          }
          return console.log(data.msg); // handle error later
        })
        .catch(err => console.log(err));
  };

  getChannels = () => {
    const { match: { params: { id } } } = this.props;
    const { channelsState: { offset } } = this.state;

    request("get", `/user/${id}/subscriber?limit=8&offset=${offset}`)
        .then(({data}) => {
          if(!data.error) {
            return this.setState((prevState) => {
              return {
                channelsState: {
                  ...prevState.channelsState,
                  channels: prevState.channelsState.channels.concat(data.channels),
                  offset: prevState.channelsState.offset + data.channels.length,
                  loading: false
                },
              }
            });
          }
          return console.log(data.msg); // handle error later
        })
        .catch(err => console.log(err));
  };

  renderVideoList = () => {
    const { videosState: { videos, loading } } = this.state;
    if(loading) return <LoadingSpinner/>;

    return (
        <VideoSection
            getMoreVideos={() => this.getVideos()}
            scrollable
            videos={videos}
        />
    );
  };

  renderChannelList = () => {
    const { channelsState: { channels, loading } } = this.state;
    if(loading) return <LoadingSpinner/>;

    return <ChannelSection channels={channels}/>
  };

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;

    this.getVideos();
    this.getChannels();

    request("get",  `/user/${id}/name`)
        .then((res) => {
          if(!res.data.error) return this.setState({ username: res.data.username });

          return console.log(res.data.msg)
        })
        .catch(err => console.log(err));
  };

  render(){
    const { tab, username } = this.state;
    const { match: { params: { id } } } = this.props;

    return (
        <div className="channel">
          <div className="container-fluid">
            <div className="row">
              <div className="img">
                <img src={tempBanner} alt="banner" className="c-banner" />
                  <div className="c-avatar">
                    <img src={tempUser} alt=""/>
                  </div>
                  <div className="c-social">
                    Social
                    <a href="/" className="fb"><i className="fa fa-facebook"/></a>
                    <a href="/" className="tw"><i className="fa fa-twitter"/></a>
                    <a href="/" className="gp"><i className="fa fa-google-plus"/></a>
                  </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="container">
              <div className="row" style={{ "marginBottom": "50px"}}>
                <div className="col-lg-12">
                  <div className="channel-details">
                    <div className="row">
                      <div className="col-lg-10 col-lg-offset-2 col-xs-12">
                        <div className="c-details">
                          <div className="c-name">
                            {username}
                          </div>
                          <div className="c-nav">
                            <ul className="list-inline">
                              <li><a onClick={(e) => { e.preventDefault(); this.setState({ tab: "videos"}) }} href="/">Videos</a></li>
                              <li><a onClick={(e) => { e.preventDefault(); this.setState({ tab: "channels"}) }} href="/">Followed Channels</a></li>
                            </ul>
                          </div>
                          <div className="c-sub pull-right">
                            <Subscriber id={id} />
                          </div>
                          <div className="clearfix"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {tab === "videos"? this.renderVideoList() : this.renderChannelList()}
            </div>
          </div>
        </div>
    )
  }
}

export default ChannelPage;
