import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { CommentSection } from "components/VideoSingle/CommentSection";
import SimpleNote from "components/Common/SimpleNote";

describe("CommentSection", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CommentSection getComments={() => {}}/>);
  });

  it("should render the components correctly if no comments", () => {
    expect(
        wrapper.containsMatchingElement(
            <SimpleNote
                medium
                text="No Comments"
            />
        )
    ).toBe(true);
  });

  it("should render a list of comments", () => {

    const comments = [
      {
        _id: "dLKasdsN1212i12LNK",
        text: "Hello World !",
        author: { username: "Joseph" },
        createdAt: 1129910012010,
      },
      {
        _id: "dLKN1212sdfsi12LNK",
        text: "Hello World !",
        author: { username: "Tim" },
        createdAt: 1129910012010,
      },
      {
        _id: "dLKN12sdsd12i12LNK",
        text: "Hello World !",
        author: { username: "Sarah" },
        createdAt: 1129910012010,
      }
    ];

    wrapper.setProps({ comments });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
