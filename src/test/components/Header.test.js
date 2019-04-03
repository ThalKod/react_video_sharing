import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Header } from "components/Header/Header";

describe("Header", () => {

  const token = "test token";
  const getMyInfo = (callback) => {
    callback({error: false})
  };
  const username = "John Doe";

  it("should render the signin and logout link when not login", () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render the Avatar and signout button if login", () => {

    const wrapper = shallow(<Header token={token} getMyInfo={getMyInfo} username={username} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(
        wrapper.state("loggedIn")
    ).toBe(true);
  });

  it("should update the header when login", () => {
    const wrapper = shallow(<Header />);
    wrapper.setProps({ token });
    expect(
        wrapper.state("loggedIn")
    ).toBe(true);
  });

  it("should update the header when signout", () => {

    const wrapper = shallow(<Header token={token} getMyInfo={getMyInfo} username={username} />);
    wrapper.setProps({ token: "" });
    expect(
        wrapper.state("loggedIn")
    ).toBe(false);
  })
});


