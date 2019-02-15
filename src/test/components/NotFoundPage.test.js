import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import NotFoundPage from "../../components/NotFoundPage";

describe("NotFoundPage component", () => {
  it("should render the NotFoundPage correctly", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
