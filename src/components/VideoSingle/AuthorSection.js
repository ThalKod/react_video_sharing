/* eslint-disable react/self-closing-comp */

import React from "react";
import { Link } from "react-router-dom";
import { request, formatCount } from "utils";

import Avatar from "components/Header/Avatar";
import Subscriber from "components/Subscriber";

export default class AuthorSection extends React.Component{

  state = {
    videosCount: 0,
    subscribersCount: 0,
    username: ""
  };

  componentDidMount = () => {
    const { author } = this.props;

    const getVideoCountPromise = request("get", `/user/${author}/video/count`);
    const getSubscribersCountPromise = request("get", `/user/${author}/subscribers/count`);
    const getUserNamePromise = request("get", `/user/${author}/name`);

    Promise.all([getSubscribersCountPromise, getVideoCountPromise, getUserNamePromise])
        .then(res => {
          const [{ data: { subscribersCount } }, { data: { videosCount }}, { data: { username }}] = res;
          this.setState({ subscribersCount, videosCount, username });
        })
        .catch(err => console.log(err));
  };


  render(){
    const { viewCount, author } = this.props;
    const { videosCount, subscribersCount, username } = this.state;

    return(
        <div className="author">
          <Link to={`/channel/${author}`}><Avatar username={username} className="sv-avatar"/></Link>
          <div className="sv-name">
            <div><Link to={`/channel/${author}`}>{username.charAt(0).toUpperCase() + username.slice(1)}</Link>{` . ${videosCount} Videos`}</div>
            <Subscriber sub={subscribersCount} id={author}/>
          </div>
          <div className="sv-views">
            <div className="sv-views-count">{ formatCount(viewCount) } Views</div>
          </div>
          <div className="clearfix"></div>
        </div>
    )
  }
}
