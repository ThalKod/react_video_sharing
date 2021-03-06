import {ADD_COMMENTS, CLEAR_COMMENTS, GET_COMMENTS, ADD_REPLY} from "actions/types";
import {request} from "utils";

export const startGetComments = ({ limit = 5, offset = 0}, id) => (dispatch) => {
  return request("get", `/comment/video/${id}?limit=${limit}&offset=${offset}`)
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};
        dispatch({ type: GET_COMMENTS, payload: res.data.comments });
        if(res.data.comments.length <= 0) return { error: false, end: true };
        return { error: false };
      })
      .catch(err => {
        return { error: true, msg: err};
      });
};

export const startAddComments = (comment, id) => (dispatch) => {
  return request("post", `/comment/video/${id}`, {}, comment)
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};
        dispatch({ type: ADD_COMMENTS, payload: res.data.comment });
        return { error: false };
      })
      .catch(err => {
        return { error: true, msg: err};
      });
};

export const startAddReply = (comment, id) => (dispatch) => {
  return request("post", `/comment/reply/${id}`, {}, comment)
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};
        console.log("Comment+========",res.data.comment);
        dispatch({type: ADD_REPLY, payload: { comment: res.data.comment, parentId: id }});
        return ({ error: false});
      })
      .catch(err => ({ error: true, msg: err }));
};

export const clearComment = () => {
  return {
    type: CLEAR_COMMENTS
  }
};

