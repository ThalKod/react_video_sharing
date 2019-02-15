import { AUTH_USER, SIGN_OUT_USER } from "../../actions/actionTypes";
import userReducer from "../../reducers/user";

describe("User Reducers", () => {
  it("should set email and username in state", () => {
    const payload = { token: "token", user: { username: "test", email: "test@mail.com" }}
    const action = {
      type: AUTH_USER,
      payload
    };
    const data = userReducer(undefined, action);
    expect(data).toEqual({ username: "test", email: "test@mail.com" });
  });

  it("should remove email and username from state", () => {
    const action = {
      type: SIGN_OUT_USER,
    };
    const data = userReducer(undefined, action);
    expect(data).toEqual({ username: "", email: "" });
  })
});
