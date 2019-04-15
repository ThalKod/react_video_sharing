import React from "react";
import { connect } from "react-redux";
import { request } from "utils";

// import VideoSection from "components/HomePage/VideoSection";
import LoadingSpinner from "components/Common/LoadingSpinner";

import tempBanner from "assets/images/channel-banner.png";
// import Avatar  from "components/Header/Avatar";
import tempUser from "assets/images/channel-user.png";
import VideoSection from "../Home/VideoSection";

class ChannelPage extends React.Component{

  state = {
    loading: true,
    videos: [],
    offset: 0,
    tab: "videos",
    subscribersCount: 0
  };

  getVideos = () => {
    const { match: { params: { id } } } = this.props;
    const { offset } = this.state;

    request("get", `/video/list/user/${id}?limit=8&offset=${offset}`)
        .then(({ data }) => {
          if(!data.error) {
            return this.setState((prevState) => {
              return {
                videos: prevState.videos.concat(data.videos),
                loading: false,
                offset: prevState.offset + data.videos.length
              }
            });
          }
          return console.log(data.msg); // handle error later
        })
        .catch(err => console.log(err));
  };

  renderVideoList = () => {
    const { loading, videos } = this.state;
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
    return <div>Channels here...</div>
  };

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;

    this.getVideos();

    request("get", `/user/${id}/subscribers/count`)
        .then(res => {
          console.log(res.data);
          if(!res.data.error) this.setState({ subscribersCount: res.data.subscribersCount });
        })
        .catch(err => {
          console.log(err);
        })
  };

  render(){
    const { username } = this.props;
    const { tab, subscribersCount } = this.state;

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
                            <div className="c-sub-wrap">
                              <div className="c-f">
                                Subscribe
                              </div>
                              <div className="c-s">
                                {subscribersCount}
                              </div>
                              <div className="clearfix"/>
                            </div>
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

const mapStateToProps = (state) => ({
  id: state.user.id,
  username: state.user.username
});

export default connect(mapStateToProps)(ChannelPage);