import React from "react";

import temp1 from "assets/images/ava5.png";
import temp2 from "assets/images/video2-8.png";

export default class ChannelSingle extends React.Component{

  state = {

  };

  render(){
    return (
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="cns-block">
            <a href="/" className="cns-image">
              <img src={temp2} alt="imagel"/>
            </a>
            <div className="cns-img-small">
              <div className="cns-small-wrapp">
                <img src={temp1} alt="small"/>
              </div>
            </div>
            <div className="cns-info">
              <h5>Grainz<i className="arrow"/></h5>
              <span>27,548 Subscribers</span>
              <span>615 Videos</span>
              <span>10 Million Views</span>
              <span className="cv-percent"><span className="cv-circle"/>78%</span>
            </div>
          </div>
        </div>
    )
  }
}
