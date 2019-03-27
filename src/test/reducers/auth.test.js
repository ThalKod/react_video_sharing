import { AUTH_USER, SIGN_OUT_USER } from "actions/types";
import authReducer from "reducers/auth";

describe("Auth Reducers", () => {

  it("should set userToken in state", () => {
    const action = {
      type: AUTH_USER,
      payload: { token: "token" }
    };
    const data = authReducer(undefined, action);
    expect(data).toEqual({userToken: "token"});
  });

  it("should remove userToken from state", () => {
    const action = {
      type: SIGN_OUT_USER,
    };
    const data = authReducer(undefined, action);
    expect(data).toEqual({userToken: ""});
  });
});
