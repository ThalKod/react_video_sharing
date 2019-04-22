import React from "react";
import { Link } from "react-router-dom"

import Avatar from "components/Header/Avatar";
import CommentBox from "components/VideoSingle/CommentBox";
import { formatTimestamps } from "utils";


export default class CommentSingle extends React.Component{

  state= {
    replyBox: false
  };

  showReplyBox = () => {
    this.setState({ replyBox: true});
  };

  hideReplyBox = () => {
      this.setState({ replyBox: false });
  };

  render(){
    const { text, author: { username, _id }, createdAt, id : commentId } = this.props;
    const { replyBox } = this.state;

    return(
        <div className="cl-comment">
          <div className="cl-avatar">
            <Link to={`/channel/${_id}`}>
              <Avatar username={username}/>
            </Link>
          </div>
          <div className="cl-comment-text">
            <div className="cl-name-date"><Link to={`/channel/${_id}`}>{username}</Link> . {formatTimestamps(createdAt)}</div>
            <div className="cl-text">{text}</div>
            { !replyBox ?
                <div className="cl-meta">
                  <button onClick={this.showReplyBox} className="reply-button" type="submit">Reply</button>
                </div>
                :
                <CommentBox reply commentId={commentId} hideReplyBox={this.hideReplyBox} onSubmit={this.hideReplyBox} />
            }
          </div>
          <div className="clearfix"/>
        </div>
    )
  }
}

