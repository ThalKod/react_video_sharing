import { AUTH_USER, SIGN_OUT_USER, GET_MY_INFO } from "actions/types";
import userReducer from "reducers/user";
import users from "test/__mock__/users";

describe("User Reducers", () => {

  // let payload;

  /* beforeEach(() => {
    payload = { token: "token", user: { username: "test", email: "test@mail.com", _id: "" }};
  }); */

  it("should set email and username in state", () => {
    // payload = { token: "token", user: { username: "test", email: "test@mail.com", _id: "" }};
    const action = {
      type: AUTH_USER,
      payload: users[0]
    };
    const data = userReducer(undefined, action);
    expect(data).toEqual(users[0].user);
  });

  it("should remove email and username from state", () => {
    const action = {
      type: SIGN_OUT_USER,
    };
    const data = userReducer(undefined, action);
    expect(data).toEqual({ username: "", email: "", _id: "" });
  });

  it("should get user info", () => {
    const action = {
      type: GET_MY_INFO,
      payload: users[0]
    };

    const data = userReducer(undefined, action);
    expect(data).toEqual(users[0].user);
  })
});

