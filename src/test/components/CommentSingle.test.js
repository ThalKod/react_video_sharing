import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"

import CommentSingle from "../../components/VideoSingle/CommentSingle";

describe("CommentSingle", () => {
  it("should render correctly the CommentSingle components", () => {
    const props = {
      text: "Hello World !",
      author: { username: "My name" },
      createdAt: 1129910012010,
      reply: []
    };
    const wrapper = shallow(<CommentSingle {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
