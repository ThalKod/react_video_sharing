import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import HomePage from "components/HomePage/HomePage";

describe("HomePage component", () => {
  it("should render the Homepage correctly", () => {
    const wrapper = shallow(<HomePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
