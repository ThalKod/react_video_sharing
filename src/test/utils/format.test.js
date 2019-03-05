import { formatSecond, formatBytes } from "../../utils";

describe("Format Utils", () => {
  it("should correctly format the seconds", () => {
    const res = formatSecond(12321);
    expect(res).toEqual("3 hours, 25 minutes, 21 seconds");
  });

  it("should correctly format the bytes", () => {
    const res = formatBytes(11102);
    expect(res).toEqual("10.84  KB");
  })
});
