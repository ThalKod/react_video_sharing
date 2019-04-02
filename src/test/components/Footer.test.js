import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Footer from "components/Footer";

describe("Footer component", () => {
  it("should render the footer correctly", () => {
    const wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
