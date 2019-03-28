import React from "react";
import { connect } from "react-redux";

import tempBanner from "assets/images/channel-banner.png";
// import Avatar  from "components/Header/Avatar";
import tempUser from "assets/images/channel-user.png";

class ChannelPage extends React.Component{

  state = {

  };

  renderVideoList = () => {

  };

  render(){
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="channel-details">
                    <div className="row">
                      <div className="col-lg-10 col-lg-offset-2 col-xs-12">
                        <div className="c-details">
                          <div className="c-name">
                            NaughtyDog
                          </div>
                          <div className="c-nav">
                            <ul className="list-inline">
                              <li><a href="/">Videos</a></li>
                              <li><a href="/">Playlist</a></li>
                            </ul>
                          </div>
                          <div className="c-sub pull-right">
                            <div className="c-sub-wrap">
                              <div className="c-f">
                                Subscribe
                              </div>
                              <div className="c-s">
                                22,548,145
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
            </div>
          </div>
          <div className="content-block">
            <div className="cb-content videolist">
              <div className="row"/>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  id: state.user.id
});

export default connect(mapStateToProps)(ChannelPage);
