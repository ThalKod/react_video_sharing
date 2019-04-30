import React from "react";
import { Link } from "react-router-dom";

import temp1 from "assets/images/ava5.png";
import temp2 from "assets/images/video2-8.png";

import { request } from "utils";

export default class ChannelSingle extends React.Component{

  state = {// We will handle loading images state....
    videosCount: 0
  };


  componentDidMount = () => {
    const { id } = this.props;

    request("get", `/user/${id}/video/count`)
        .then((res) => {
          if(!res.data.error) return this.setState({ videosCount: res.data.videosCount});
          return console.log(res.data.msg);
        })
        .catch(err => console.log(err));
  };

  render(){
    const { username, subscribersCount, id } = this.props;
    const { videosCount } = this.state;

    return (
        <Link to={`/channel/${id}`}>
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
                <h5>{username}<i className="arrow"/></h5>
                <span>{subscribersCount} Subscribers</span>
                <span>{videosCount} Videos</span>
              </div>
            </div>
          </div>
        </Link>

    )
  }
}
