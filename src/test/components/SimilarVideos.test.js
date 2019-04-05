import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import SimilarVideos from "components/VideoSingle/SimilarVideos";
import LoadingSpinner from "components/Common/LoadingSpinner";
import videos from "test/__mock__/videos";

describe("SimilarVideos", () => {
  it("should render the Loading Spinner correctly while fetching videos", () => {
    const wrapper = shallow(<SimilarVideos/>);
    expect(
        wrapper.containsMatchingElement(
            <LoadingSpinner medium/>
        )
    ).toBe(true);
  });

  it("should render the videos list", () => {
    const wrapper = shallow(<SimilarVideos/>);
    wrapper.setState({ videos, loading: false });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
