import React from "react";
import { connect } from "react-redux";

import Avatar from "../Header/Avatar";
import CommentSingle from "./CommentSingle";
import { request } from "../../utils";

class CommentSection extends React.Component{

  state = {
    commentText: "",
    commentTotal: 0
  };

  checkIfCanComment = () => {
    const  { userName, redirect } = this.props;
    if(!userName) redirect();
  };

  handleCommentSubmit = (e) => {
    e.preventDefault();

    const { commentText } = this.state;
    const { id } = this.props;

    request("post", `/comment/video/${id}`, {}, { commentText })
        .then(({ data }) =>{
          if(!data.error)
            this.setState({ commentText: "" });
          // then handling error
        })
        .catch(err => console.log(err));
  };

  renderCommentList = () => {
    return [<CommentSingle/>, <CommentSingle/>, <CommentSingle/>, <CommentSingle/>]
  };

  componentDidMount = () => {
    const { id } = this.props;
    request("get",  `/comment/count/video/${id}`)
        .then(({ data }) => {
          if(!data.error) this.setState({ commentTotal: data.count})
        })
        .catch(err => console.log(err));
  };

  render(){

    const { userName } = this.props;
    const { commentText, commentTotal} = this.state;

    return(
        <div className="comments">
          <div className="reply-comment">
            <div className="rc-header"><i className="cv cvicon-cv-comment"/> <span
                className="semibold">{commentTotal}</span> Comments
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
                    placeholder="Enter comment here..."
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
          <div className="comments-list">
            <div className="cl-header">
              <div className="c-nav">
                <ul className="list-inline">
                  <li><a href="/" className="active">Newest Comments</a></li>
                  <li><a href="/">Popular Comments</a></li>
                </ul>
              </div>
            </div>
            {this.renderCommentList()}
            <div className="row">
              <div className="col-lg-12">
                <div className="loadmore-comments">
                    <button type="submit" className="btn btn-default h-btn">Load more Comments</button>
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
});

export default connect(mapStateToProps)(CommentSection);
