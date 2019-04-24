/* eslint-disable no-plusplus */
import React from "react";

import ChannelSingle from "components/Channel/ChannelSingle";
import SimpleNote from "../Common/SimpleNote";

export default class ChannelSection extends React.Component{

  state = {

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
