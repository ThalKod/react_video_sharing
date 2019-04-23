import React from "react";
import { connect } from "react-redux";

import  { startAddComments, startAddReply } from "actions";

class CommentBox extends React.Component {

  state = {
    commentText: ""
  };


  handleCommentSubmit = (e) => {
    e.preventDefault();

    const { commentText  } = this.state;
    const { id, addComments, onSubmit, reply, addReply, commentId } = this.props;

    if(!commentText) return;

    if(!reply){
       addComments({ commentText } , id)
          .then(({ error }) =>{
            if(!error)
              this.setState({ commentText: "" });
            onSubmit();
            // then handling error
          })
          .catch(err => console.log(err));
    }else{
      addReply({ commentText }, commentId)
          .then(({ error }) => {
            if(!error)
              this.setState({ commentText: "" });
            onSubmit();
          })
          .catch(err => console.log(err));
    }
  };

  render() {

    const { commentText } = this.state;
    const { reply, hideReplyBox } = this.props;

    return (
        <div className="reply-comment">
          <div className="rc-comment">
            <form>
                      <textarea
                          value={commentText}
                          // eslint-disable-next-line jsx-a11y/no-autofocus
                          autoFocus={!!reply}
                          onChange={({ target: { value }}) => { this.setState({ commentText: value }) }}
                          rows="3"
                          placeholder="Enter comment here..."
                          onBlur={reply ? hideReplyBox : null }
                      />
              <button type="button" onMouseDown={this.handleCommentSubmit}>
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
  addReply: (comment, id) => dispatch(startAddReply(comment, id)),
});

export default connect(null, mapDispatchToProps)(CommentBox);
