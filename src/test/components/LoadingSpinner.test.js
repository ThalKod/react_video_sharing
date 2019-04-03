import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import LoadingSpinner from "components/Common/LoadingSpinner";

describe("LoadingSpinner", () => {
  it("should correctly render the loading spinner", () => {
    const wrapper = shallow(<LoadingSpinner text="Loading"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.contains(<p>Loading</p>)).toBe(true);
  })
});
