import React from "react";
import { connect } from "react-redux";

import Avatar from "../Header/Avatar";
import { request } from "../../utils";

class CommentSection extends React.Component{

  state = {
    commentText: "Enter your comment here...",
  };


  checkIfCanComment = () => {
    const  { userName, redirect } = this.props;
    if(!userName) redirect();
  };

  handleCommentSubmit = (e) => {
    e.preventDefault();

    const { commentText } = this.state;

    request("post", "/comments/new", {}, { commentText })
        .then(res => console.log(res))
        .catch(err => console.log(err));
  };

  render(){

    const { userName } = this.props;
    const { commentText} = this.state;

    return(
        <div className="comments">
          <div className="reply-comment">
            <div className="rc-header"><i className="cv cvicon-cv-comment"/> <span
                className="semibold">236</span> Comments
            </div>
            { userName && <div className="rc-ava">
                            <Avatar username={userName}/>
                          </div>
            }
            <div className="rc-comment">
              <form>
                <textarea
                    rows="3"
                    value={commentText}
                    onChange={({ target: { value }}) => { this.setState({ commentText: value }) }}
                    onFocus={this.checkIfCanComment}
                    />
                <button type="submit" onClick={this.handleCommentSubmit}>
                  <i className="cv cvicon-cv-add-comment"/>
                </button>
              </form>
            </div>
            <div className="clearfix"/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userName: state.user.username,
});

export default connect(mapStateToProps)(CommentSection);
