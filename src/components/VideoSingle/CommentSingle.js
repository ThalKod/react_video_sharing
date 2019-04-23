import React from "react";
import { Link } from "react-router-dom"

import Avatar from "components/Header/Avatar";
import CommentBox from "components/VideoSingle/CommentBox";
import { formatTimestamps } from "utils";


export default class CommentSingle extends React.Component{

  state= {
    replyBox: false,
    showReplies: false
  };

  showReplyBox = () => {
    this.setState({ replyBox: true});
  };

  hideReplyBox = () => {
      this.setState({ replyBox: false });
  };

  renderReplies = () => {

    const { reply: replies } = this.props;

    return replies.map(({ _id, text, author, createdAt, reply}) => {
      if(author)
        return <CommentSingle
                  isReply
                  text={text}
                  key={_id}
                  id={_id}
                  author={author}
                  createdAt={createdAt}
                  reply={reply}
              />;
      return <p style={{"color": "red"}}>Not implemented yet</p> // TODO: Refractor <CommentSingle /> to recursively fetch and show all subComment...
    })

  };

  render(){
    const { isReply, text, author: { username, _id }, createdAt, id : commentId, reply } = this.props;
    const { replyBox, showReplies } = this.state;

    return(
        <div>
          <div className={isReply ? "cl-comment-reply" : "cl-comment"}>
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
              {reply.length > 0 && <div className="cl-replies">
                                    <button
                                        onClick={() => this.setState({ showReplies: !showReplies})}
                                        type="button"
                                    >
                                      {showReplies ? "Hide" : "View"} replies <i className={showReplies ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"/>
                                    </button>
                                  </div>
              }
            </div>
            <div className="clearfix"/>
          </div>
          {reply.length > 0 && showReplies && this.renderReplies()}
        </div>
  )
  }
}

