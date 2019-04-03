import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import VideoDescription from "../../components/VideoSingle/VideoDescription";

describe("VideoDescripition", () => {

  let wrapper;
  beforeEach( () => {
    const props = {
      description: "description",
      tags: [{id: "text", text: "text"}, {id: "hello", text: "hello"}],
      createdAt: 12992383299139
    };

    wrapper = shallow(<VideoDescription {...props} />);
  });

  it("should render the component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should show the full description on button click", () => {
    wrapper.find("button").simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.state("showDescription")).toBe(true);
  });
});
