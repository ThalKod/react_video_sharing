import React from "react";

import { request, formatCount } from "utils";
import { connect }  from "react-redux"

class Subscriber extends React.Component{
  state = {
    subscribersCount: 0,
    subscribeState: "Subscribe",
  };

  handleClick = () => {
    const { id: toSubscribeId } = this.props;

    request("post", `/user/${toSubscribeId}/subscriber`)
        .then((res) => {
          if(!res.data.error) return this.setState({ subscribeState: "Subscribed" });
          return console.log("error", res.data.msg);
        })
        .catch(err => console.log(err))
  };

  componentDidMount = () => {
    const { id: toSubscribeId } = this.props;

    const getSubscribersCountPromise = request("get", `/user/${toSubscribeId}/subscribers/count`);
    const checkIfIsSubscriberPromise = request("post", `/check/subscribers/${toSubscribeId}`);

    Promise.all([getSubscribersCountPromise, checkIfIsSubscriberPromise])
        .then((res) => {
          if(!res[0].data.error) this.setState({ subscribersCount: res[0].data.subscribersCount });

          if(!res[1].data.error){
            if(res[1].data.subscribed) return this.setState({ subscribeState: "Subscribed"});
            return this.setState({ subscribeState: "Subscribe"});
          }
          return console.log(res);
        })
        .catch(err => console.log(err)) // TODO: handling error
  };

  renderSubscribeState = () => {
    const { currentUserId, id: toSubscribeId } = this.props;
    const { subscribeState } = this.state;

    if(!currentUserId || currentUserId === toSubscribeId){
      return <p className="c-f" style={{ "borderColor": "lightgreen", "backgroundColor": "lightgreen" }}>Subscribers</p>
    }

    if(subscribeState === "Subscribe") {
      return (
          (<button onClick={this.handleClick} className="c-f" type="submit">
            {subscribeState}
          </button>)
      )
    }

    return <p className="c-f" style={{ "borderColor": "lightgreen", "backgroundColor": "lightgreen" }}>{subscribeState}</p>
  };

  render(){
    const { subscribersCount } = this.state;

    return (
        <div className="c-sub">
          {this.renderSubscribeState()}
          <div className="c-s">
            {formatCount(subscribersCount)}
          </div>
          <div className="clearfix"/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUserId: state.user._id
});

export default connect(mapStateToProps)(Subscriber);
