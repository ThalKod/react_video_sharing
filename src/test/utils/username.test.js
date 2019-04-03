import {getInitial} from "utils";

describe("Username Utils", () => {
  it("should return the correct initial", () => {
    expect(
        getInitial("John Doe")
    ).toBe("JD");
  })
});
