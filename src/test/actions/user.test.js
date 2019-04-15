import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import moxios from 'moxios';

import users from "test/__mock__/users";
import { GET_MY_INFO } from "actions/types";
import { startGetMyInfo } from "actions";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

describe("Users action creators", () => {
  beforeEach(() => {
    moxios.install();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: users[0],
      });
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("`startGetMyInfo` should dispatch GET_MY_INFO", () => {
    return store.dispatch(startGetMyInfo(() => {}))
        .then(() => {
          const action = store.getActions();
          expect(action[0].type).toBe(GET_MY_INFO);
          expect(action[0].payload).toEqual(users[0]);
        })
  })
});
