import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Avatar from "components/Header/Avatar";
import CommentSingle from "components/VideoSingle/CommentSingle";
import { request, formatCount } from "utils";
import { startGetComments, clearComment } from "actions";
import SimpleNote from "components/Common/SimpleNote";
import CommentBox from "components/VideoSingle/CommentBox";

export class CommentSection extends React.Component{

  state = {
    commentTotal: 0,
    loadMore: false
  };

  checkIfCanComment = () => {
    const  { userName, redirect } = this.props;
    if(!userName) redirect();
  };

  loadMoreComment = () => {
    const { getComments, offset, id } = this.props;

    // TODO: Handling loading and error
    getComments({ offset }, id)
        .then(({ error, end}) => {
          if(!error) {
            if(end) this.setState({ loadMore: false });
          }
        })
        .catch(err => console.log(err));
  };

  renderCommentList = () => {
    const { comments } = this.props;
    if(!comments || comments.length <= 0) return <SimpleNote medium text="No Comments"/>;

    return comments.map(({ _id, text, author, createdAt, reply}) => {
      return <CommentSingle text={text} key={_id} id={_id} author={author} createdAt={createdAt} reply={reply}/>
    });
  };

  componentDidMount = () => {
    const { id, getComments, offset } = this.props;

    const getCommentTotalPromise = request("get",  `/comment/count/video/${id}`);
    const getCommentsListPromise = getComments({ offset }, id);

    Promise.all([getCommentTotalPromise, getCommentsListPromise])
        .then(res => {
          if(!res[0].data.error && !res[1].error){
            const { count } = res[0].data;
            this.setState({ commentTotal: count, loadMore: count > 0 });
          }

        })
        .catch(err => console.log(err));
  };

  componentWillUnmount = () => {
    const { clearComments } = this.props;
    clearComments();
  };

  render(){

    const { userName, userId, id, redirect } = this.props;
    const { commentTotal, loadMore } = this.state;

    return(
        <div className="comments">
          <div className="reply-comment">
            <div className="rc-header"><i className="cv cvicon-cv-comment"/> <span
                className="semibold">{formatCount(commentTotal)}</span> Comments
            </div>
            { userName && <div className="rc-ava">
                            <Link to={`/channel/${userId}`}>
                              <Avatar username={userName}/>
                            </Link>
                          </div>
            }
            <CommentBox id={id} redirect={redirect} onSubmit={() => this.setState({commentTotal: commentTotal + 1})}/>
            <div className="clearfix"/>
          </div>
          <div className="comments-list">
            <div className="cl-header">
              <div className="c-nav">
                <ul className="list-inline">
                  <li className="active">Newest Comments</li>
                </ul>
              </div>
            </div>
            {this.renderCommentList()}
            <div className="row">
              <div className="col-lg-12">
                <div className="loadmore-comments">
                  {loadMore && <button onClick={this.loadMoreComment} type="submit" className="btn btn-default h-btn">Load more Comments</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userName: state.user.username,
  userId: state.user._id,
  comments: state.comment.comments,
  offset: state.comment.offset,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (options, id) => dispatch(startGetComments(options, id)),
  clearComments: () => dispatch(clearComment())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
