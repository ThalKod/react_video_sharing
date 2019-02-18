import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import SearchBar from "../../components/Header/SearchBar";


describe("SearchBar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar/>)
  });


  it("should render the SearchBar correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
