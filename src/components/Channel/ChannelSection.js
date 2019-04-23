/* eslint-disable no-plusplus */
import React from "react";

import ChannelSingle from "components/Channel/ChannelSingle";

export default class ChannelSection extends React.Component{

  state = {

  };

  renderChannelList = () => {
    const array = [];

    for(let i = 0; i < 8; i++) {
      array.push(<ChannelSingle/>);
    }

    return array;
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
