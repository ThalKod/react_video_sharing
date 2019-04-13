import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import videos from "test/__mock__/videos";
import VideoSingleTab from "components/VideoSingle/VideoSingleTab";

describe("VideoSingleTab", () => {
  it("should render the components correctly", () => {
    const props = { ...videos[0], id: "as0133"};
    const wrapper = shallow(<VideoSingleTab {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
