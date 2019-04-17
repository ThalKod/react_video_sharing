import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import moxios from 'moxios';


import { AUTH_USER, SIGN_OUT_USER } from "actions/types";
import { startSigninUser, startSignupUser, signOut } from "actions";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});


describe("Auth actions creators", () => {
  it(" `signOut` actions creator should dispatch SIGN_OUT_USER ", () => {
     const action = signOut();
     expect(action).toEqual({
       type: SIGN_OUT_USER,
     })
  });

  describe("", () => {
    beforeEach(() => {
      moxios.install();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {token: "test", user: {}},
        });
      });
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it(" `startSigninUser` actions creator should dispatch AUTH_USER ", () => {
      return store.dispatch(startSigninUser({ email: "", password: "" }, () => {}))
          .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({ type: AUTH_USER, payload: {token: "test", user: {}} });
          })
    });

    it(" `startSignupUser` actions creator should dispatch AUTH_USER ", () => {
      return store.dispatch(startSignupUser({ email: "", username: "", password: "" }, () => {}))
          .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({ type: AUTH_USER, payload: {token: "test", user: {}} });
          })
    });
  })
});


