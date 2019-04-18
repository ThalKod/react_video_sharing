import React from "react";
import { connect } from "react-redux";

import { request } from "utils";

class Subscriber extends React.Component{
  state = {
    subscribersCount: 0,
    subscribeState: "Subscribe",
  };

  handleClick = () => {
    const { author: toSubscribeId } = this.props;

    request("post", `/user/${toSubscribeId}/subscriber`)
        .then((res) => {
          if(!res.data.error) return this.setState({ subscribeState: "Subscribed" });
          return console.log("error", res.data.msg);
        })
        .catch(err => console.log(err))
  };

  componentDidMount = () => {
    const { author: toSubscribeId } = this.props;

    request("get", `/user/${toSubscribeId}/subscribers/count`)
        .then((res) => {
          if(!res.data.error) return this.setState({ subscribersCount: res.data.subscribersCount });
          return console.log(res.data.msg) // TODO: handling error
        })
        .catch((err) => console.log(err))// TODO: Handling error
  };

  render(){
    const { subscribersCount, subscribeState } = this.state;

    return (
        <div className="c-sub">
          {subscribeState === "Subscribe" ?
              (<button onClick={this.handleClick} className="c-f" type="submit">
                {subscribeState}
              </button>) :
              <p className="c-f" style={{ "borderColor": "lightgreen", "backgroundColor": "lightgreen" }}>{subscribeState}</p>
          }
          <div className="c-s">
            {subscribersCount}
          </div>
          <div className="clearfix"/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUserID: state.user._id,
});

export default connect(mapStateToProps)(Subscriber);
