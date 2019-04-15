import {ADD_COMMENTS, GET_COMMENTS, CLEAR_COMMENTS } from "actions/types";
import commentReducer from "reducers/comment";
import comments from "test/__mock__/comments";

describe("Comment Reducer", () => {
  it("should add the comment in state", () => {
    const action = {
      type: ADD_COMMENTS,
      payload: comments[0]
    };

    const data = commentReducer(undefined, action);
    expect(data.offset).toBe(1);
    expect(data.comments[0]).toEqual(comments[0]);
  });

  it("should get more comments in state", () => {
    const action = {
      type: GET_COMMENTS,
      payload: comments
    };

    const data = commentReducer(undefined, action);
    expect(data.offset).toBe(2);
    expect(data.comments).toEqual(comments);
  });

  it("should clear comments in state", () => {
    const action = {
      type: CLEAR_COMMENTS,
    };

    const data = commentReducer({ comments }, action);
    expect(data.offset).toBe(0);
    expect(data.comments).toEqual([]);
  })
});
