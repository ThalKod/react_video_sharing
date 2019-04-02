import React from "react";
import { Link } from "react-router-dom"

import Avatar from "components/Header/Avatar";
import { formatTimestamps } from "utils";

export default function CommentSingle({ text, author: { username, _id }, createdAt }){
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
        </div>
        <div className="clearfix"/>
      </div>
  )
}
