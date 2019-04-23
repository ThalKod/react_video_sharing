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

  renderReplies = () => {

    const { reply: replies } = this.props;

    return replies.map(({ _id, text, author, createdAt, reply}) => {
      if(author)
        return <CommentSingle isReply text={text} key={_id} id={_id} author={author} createdAt={createdAt} reply={reply}/>
      return null
    })


    /* return (
        <div className="cl-comment-reply">
          <div className="cl-avatar">
            <Link to={`/channel/${reply[0].author._id}`}>
              <Avatar username={reply[0].author.username}/>
            </Link>
          </div>
          <div className="cl-comment-text">
            <div className="cl-name-date"><a href="/">kingPIN</a> . 6 days ago</div>
            <div className="cl-text"> I was stuck too. then I started to shoot everything in Doom.</div>
            <div className="cl-meta"><span className="green"><span className="circle"/> 70</span> <span
                className="grey"><span className="circle"/> 9</span> . <a href="/">Reply</a></div>
          </div>
          <div className="clearfix"/>
        </div>
    ) */

  };

  render(){
    const { isReply, text, author: { username, _id }, createdAt, id : commentId, reply } = this.props;
    const { replyBox } = this.state;

    return(
        <div>
          <div className={isReply ? "cl-comment-reply" : "cl-comment"}>
            <div className="cl-avatar">
              <Link to={`/channel/${_id}`}>
                {username && <Avatar username={username}/>}
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
                                    <button type="button">View replies <i className="fa fa-chevron-down" aria-hidden="true"/></button>
                                  </div>
              }
            </div>
            <div className="clearfix"/>
          </div>
          {reply.length > 0 && this.renderReplies()}
        </div>
  )
  }
}

