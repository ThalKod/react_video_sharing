import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import moxios from 'moxios';

import {ADD_COMMENTS, GET_COMMENTS, CLEAR_COMMENTS } from "actions/types";
import comments from "test/__mock__/comments";
import { clearComment, startGetComments, startAddComments } from "actions";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

describe("Comments actions creators", () => {
  it("`clearComment` should dispatch CLEAR_COMMENTS", () => {
    const action = clearComment();
    expect(action.type).toBe(CLEAR_COMMENTS);
  });

  describe('', () => {
    beforeEach(() => {
      moxios.install();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: { comments, comment: comments[0] },
        });
      });
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("`startGetComments` should dispatch GET_COMMENTS", () => {
      return store.dispatch(startGetComments({ limit: 5, offset: 0}, "jajajsh"))
          .then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toBe(GET_COMMENTS);
            expect(actions[0].payload).toEqual(comments);
          })
    });

    it("`startAddComments` should dispatch ADD_COMMENTS", () => {
      return store.dispatch(startAddComments(comments[0], "Ajalso"))
          .then(() => {
            const actions = store.getActions();
            expect(actions[1].type).toBe(ADD_COMMENTS);
            expect(actions[1].payload).toEqual(comments[0]);
          })
    });
  });
});
