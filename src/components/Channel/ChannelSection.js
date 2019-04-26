/* eslint-disable no-plusplus */
import React from "react";

import ChannelSingle from "components/Channel/ChannelSingle";
import SimpleNote from "components/Common/SimpleNote";

export default class ChannelSection extends React.Component{

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

  onScroll = () => {
    const { getMoreChannels, channels } = this.props;
    if (// TODO: refactor scrolling and implement a better infinite bottom scroll for this component. lets' keep this for this mvp...
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      getMoreChannels({ offset: channels.length});
    }
  };

  renderChannelList = () => {
    const { channels } = this.props;

    if(!channels || channels.length <= 0)
      return <SimpleNote text="No channels found"/>;

    return channels.map(({ _id, username, subscribersCount}) => {
      return <ChannelSingle key={_id} id={_id} username={username} subscribersCount={subscribersCount}/>
    });
  };

  render(){
    return (
        <div className="col-lg-12 channels">
          <div className="content-block">
            <div className="channels-content">
              <div className="theme-section">
                <div className="row">
                  {this.renderChannelList()}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
