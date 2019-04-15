import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"

import SimpleNote from "components/Common/SimpleNote";

describe("SimpleNote Components", () => {
  it("should render the components correctly", () => {
    const wrapper = shallow(<SimpleNote text="test"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
