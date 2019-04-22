import React from "react";
import { Link } from "react-router-dom"

import Avatar from "components/Header/Avatar";
import { formatTimestamps } from "utils";


export default class CommentSingle extends React.Component{

  state= {
    replyBox: false
  };

  reply = () => {
    this.setState({ replyBox: true});
  };

  render(){
    const { text, author: { username, _id }, createdAt } = this.props;
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
                  <button onClick={this.reply} className="reply-button" type="submit">Reply</button>
                </div>
                :
                <div className="reply-comment">
                  <div className="rc-comment">
                    <form>
                      <textarea
                          rows="3"
                          placeholder="Enter comment here..."
                      />
                      <button type="submit" onClick={this.handleCommentSubmit}>
                        <i className="cv cvicon-cv-add-comment"/>
                      </button>
                    </form>
                  </div>
                </div>
            }
          </div>
          <div className="clearfix"/>
        </div>
    )
  }
}

