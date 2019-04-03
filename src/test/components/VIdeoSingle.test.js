import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import {Link} from "react-router-dom";


import VideoSingle from "../../components/Home/VideoSingle";
import {formatSecondForRendering} from "../../utils";

describe("VideoSingle", () => {

  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      name: "Test Video",
      duration: 213242,
      viewCount: 2500,
      _id: "wSLFcn283231"
    };
    wrapper = shallow(<VideoSingle {...props}/>);
  });

  it("should render the components Correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should correctly show the video deatils", () => {
    expect(
        wrapper.containsMatchingElement(
            <div className="v-desc">
              <Link to={`/video/${props._id}`}>{props.name}</Link>
            </div>
        )
    ).toBe(true);

    expect(
        wrapper.containsMatchingElement(
            <div className="v-views">
              {props.viewCount} views.
            </div>
        )
    ).toBe(true);

    expect(
        wrapper.containsMatchingElement(
              <div className="time">
                {formatSecondForRendering(props.duration)}
              </div>
        )
    ).toBe(true);
  });

  it("should update the image", () => {
    const videoImage = "myimage";
    wrapper.setState({ videoImage});

    expect(
        wrapper.containsMatchingElement(
            <img src={videoImage} alt="videoimage" />
        )
    ).toBe(true);
  });

});
