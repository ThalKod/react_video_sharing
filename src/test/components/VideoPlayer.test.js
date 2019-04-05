import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import VideoPlayer from "components/VideoSingle/VideoPlayer";

describe("VideoPlayer",() => {
  it("should render the video player correctly", () => {
    const videoUrl = "myurl";
    const wrapper = shallow(<VideoPlayer videoUrl={videoUrl}/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
