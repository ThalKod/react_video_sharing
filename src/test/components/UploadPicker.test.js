import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import UploadPicker from "../../components/Upload/UploadPicker";

describe("UploadPicker", () => {
  it("should render correctly the UploadEdit component", () => {
    const wrapper = shallow(<UploadPicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
