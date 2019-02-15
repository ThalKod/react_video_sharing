import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import RegistrationPage from "../../components/Register/RegistrationPage";

describe("RegistrationPage component", () => {
  it("should render the NotFoundPage correctly", () => {
    const wrapper = shallow(<RegistrationPage/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
