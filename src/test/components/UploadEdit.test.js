import React from "react";
import {shallow} from "enzyme/build";
import toJson from "enzyme-to-json";

import UploadEdit from "../../components/Upload/UploadEdit";

describe("UploadEdit", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UploadEdit/>);
  });

  it("should render the loading spinner if loading", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render correctly the component", () => {
    wrapper.setState({
      name: "My test Video",
      size: 130,
      duration: 2230,
      coverPhoto: null,
      loading: false,
      description: "This is my test Video...",
      tags: [{id: "text", text: "text"}],
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should set the video title on input change", () => {
    const value = "my test value";

    wrapper.setState({ loading: false });
    wrapper.find("input").at(0).simulate("change", {
      target: { value }
    });
    expect(wrapper.state("name")).toBe(value);
  });

  it("should set the description on text area change", () => {
    const value = "my test value";

    wrapper.setState({ loading: false });
    wrapper.find("textarea").at(0).simulate("change", {
      target: { value }
    });
    expect(wrapper.state("description")).toBe(value);
  });
});


