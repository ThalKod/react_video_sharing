import React from "react";
import { connect } from "react-redux";

import  { startAddComments } from "actions";

class CommentBox extends React.Component {

  state = {
    commentText: ""
  };


  handleCommentSubmit = (e) => {
    e.preventDefault();

    const { commentText  } = this.state;
    const { id, addComments, onComment } = this.props;

    if(!commentText) return;

    addComments({ commentText } , id)
        .then(({ error }) =>{
          if(!error)
            this.setState({ commentText: "" });
            onComment();
          // then handling error
        })
        .catch(err => console.log(err));
  };

  render() {

    const { commentText } = this.state;

    return (
        <div className="reply-comment">
          <div className="rc-comment">
            <form>
                      <textarea
                          value={commentText}
                          onChange={({ target: { value }}) => { this.setState({ commentText: value }) }}
                          rows="3"
                          placeholder="Enter comment here..."
                          onBlur={this.hideReplyBox}
                      />
              <button type="submit" onClick={this.handleCommentSubmit}>
                <i className="cv cvicon-cv-add-comment"/>
              </button>
            </form>
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComments: (comment, id) => dispatch(startAddComments(comment, id)),
});

export default connect(null, mapDispatchToProps)(CommentBox);
