import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Avatar from "components/Header/Avatar";

describe("Avatar", () => {
  let wrapper;
  beforeEach(() => {
    const username = "John Doe";
    wrapper = shallow(<Avatar username={username}/>);
  });

  it("should render the Avatar component correctly", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render the correct initials", () => {
    expect(
        wrapper.containsMatchingElement(<div>JD</div>)
    ).toBe(true);
  });
});
