import React from "react";
import {Link} from "react-router-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"

import AuthorSection from "../../components/VideoSingle/AuthorSection";

describe("AuthorSection", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AuthorSection/>);
  });

  it("should render the component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render the correct state", () => {
    const state = {
      videosCount: 8,
      subscribersCount: 25,
      username: "Test Name"
    };

    wrapper.setState(state); // Setting the initial state...

    expect(
        wrapper.containsMatchingElement(
            <div><Link to="/">{state.username.charAt(0).toUpperCase() + state.username.slice(1)}</Link>{` . ${state.videosCount} Videos`}</div>
        )
    ).toBe(true);

    expect(
        wrapper.containsMatchingElement(
            <div className="c-s">
              {state.subscribersCount}
            </div>
        )
    ).toBe(true);

  })
});
