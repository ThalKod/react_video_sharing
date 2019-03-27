import React from "react";
import { Link } from "react-router-dom"

import Avatar from "../Header/Avatar";
import { formatTimestamps } from "../../utils";

export default function CommentSingle({ text, author: { username }, createdAt }){
  return(
      <div className="cl-comment">
        <div className="cl-avatar">
          <Link to="/">
            <Avatar username={username}/>
          </Link>
        </div>
        <div className="cl-comment-text">
          <div className="cl-name-date"><a href="/">{username}</a> . {formatTimestamps(createdAt)}</div>
          <div className="cl-text">{text}</div>
        </div>
        <div className="clearfix"/>
      </div>
  )
}
