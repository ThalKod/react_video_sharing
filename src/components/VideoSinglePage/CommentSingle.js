import React from "react";

import Avatar from "../Header/Avatar";

export default class CommentSingle extends React.Component{

  state = {

  };

  render(){
    return(
        <div className="cl-comment">
          <div className="cl-avatar">
            <Avatar username="Pete"/>
          </div>
          <div className="cl-comment-text">
            <div className="cl-name-date"><a href="/">Isleifna</a> . 1 week ago</div>
            <div className="cl-text">Omg thank you so much, idk how I couldn't figure out that master trap</div>
            <div className="cl-meta"><span className="green"><span className="circle"/> 245</span> <span
                className="grey"><span className="circle"/> 19</span> . <a href="/">Reply</a></div>
          </div>
          <div className="clearfix"/>
        </div>
    )
  }
}
