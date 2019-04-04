import { AUTH_USER, SIGN_OUT_USER } from "actions/types";
import userReducer from "reducers/user";


describe("User Reducers", () => {

  let payload;

  beforeEach(() => {
    payload = { token: "token", user: { username: "test", email: "test@mail.com", _id: "" }};
  });

  it("should set email and username in state", () => {
    // payload = { token: "token", user: { username: "test", email: "test@mail.com", _id: "" }};
    const action = {
      type: AUTH_USER,
      payload
    };
    const data = userReducer(undefined, action);
    expect(data).toEqual(payload.user);
  });

  it("should remove email and username from state", () => {
    const action = {
      type: SIGN_OUT_USER,
    };
    const data = userReducer(undefined, action);
    expect(data).toEqual({ username: "", email: "", _id: "" });
  })
});

