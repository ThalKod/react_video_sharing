import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";


import VideoSection from "../../components/Home/VideoSection";

describe("VideoSection", () => {
  it("should render the component correctly", () => {
    const wrapper = shallow(<VideoSection/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  // TODO: add more test later
});
