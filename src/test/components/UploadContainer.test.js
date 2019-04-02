import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { UploadContainer } from "components/Upload/UploadContainer";

describe("LoadingSpinner", () => {
  it("should correctly render the UploadPicker components", () => {
    const wrapper = shallow(<UploadContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find("UploadPicker").length).toBe(1);
  });

  it("should correctly render the Loading Spinner", () => {
    const wrapper = shallow(<UploadContainer />);

    wrapper.setState({ loading: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should correctly render the UploadEdit components", () => {
    const wrapper = shallow(<UploadContainer />);

    wrapper.setState({ uploaded: true });
    expect(wrapper.find("UploadEdit").length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
