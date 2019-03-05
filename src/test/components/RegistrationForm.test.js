import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { RegistrationForm } from "../../components/Register/RegistrationForm";

describe("RegistrationForm component", () => {

  describe("when login", () => {
    it("should render the correct form", () => {
      const wrapper = shallow(<RegistrationForm/>);
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(
          wrapper.containsMatchingElement(<button>Login</button>)
      ).toBe(true);
    });

    it("should set email on input change", () => {
      const value = "test@mail.com";
      const wrapper = shallow(<RegistrationForm/>);
      wrapper.find("input").at(0).simulate("change", {
        target: { value }
      });
      expect(wrapper.state("email")).toBe(value);
    });

    it("should set password on input change", () => {
      const value = "password";
      const wrapper = shallow(<RegistrationForm/>);
      wrapper.find("input").at(1).simulate("change", {
        target: { value }
      });
      expect(wrapper.state("password")).toBe(value);
    });

    it("Login button should be disable if email and password not set", () => {
      const wrapper = shallow(<RegistrationForm />);
      const loginButton = wrapper.find("button").first();
      expect(
          loginButton.props().disabled
      ).toBe(true);
    });

    it("Login button should be enable if email and password completed", () => {
      const wrapper = shallow(<RegistrationForm />);
      wrapper.setState({ email: "test@mail.com", password: "password" });
      const loginButton = wrapper.find("button").first();
      expect(
          loginButton.props().disabled
      ).toBe(false);
    });

    it("should submit valid form", () => {
      const signinUser = jest.fn();
      const user = {email: "test@mail.com", password: "password"};
      const wrapper = shallow(<RegistrationForm signinUser={signinUser} />);

      wrapper.setState({...user});
      wrapper.find("button").first().simulate("click", {
        preventDefault: () => {}
      });
      expect(signinUser).toHaveBeenCalled();
    });

  });

  describe("when signup", () => {
    it("should render the correct form if we want to signup", () => {
      const wrapper = shallow(<RegistrationForm signup/>);
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(
          wrapper.containsMatchingElement(<button>Sign Up</button>)
      ).toBe(true);
    });

    it("should set email on input change", () => {
      const value = "test@mail.com";
      const wrapper = shallow(<RegistrationForm signup/>);
      wrapper.find("input").at(0).simulate("change", {
        target: { value }
      });
      expect(wrapper.state("email")).toBe(value);
    });

    it("should set username on input change", () => {
      const value = "username";
      const wrapper = shallow(<RegistrationForm signup/>);
      wrapper.find("input").at(1).simulate("change", {
        target: { value }
      });
      expect(wrapper.state("username")).toBe(value);
    });

    it("should set password on input change", () => {
      const value = "password";
      const wrapper = shallow(<RegistrationForm signup/>);
      wrapper.find("input").at(2).simulate("change", {
        target: { value }
      });
      expect(wrapper.state("password")).toBe(value);
    });

    it("should set passwordverification on input change", () => {
      const value = "passwordveerif";
      const wrapper = shallow(<RegistrationForm signup/>);
      wrapper.find("input").at(3).simulate("change", {
        target: { value }
      });
      expect(wrapper.state("passwordVerification")).toBe(value);
    });

    it("signup button should be disable if form not complete", () => {
      const wrapper = shallow(<RegistrationForm signup />);
      const loginButton = wrapper.find("button").first();
      expect(
          loginButton.props().disabled
      ).toBe(true);
    });

    it("signup button should be disable if there's an error", () => {
      const wrapper = shallow(<RegistrationForm signup />);
      wrapper.setState({ errorEmail: true });
      const loginButton = wrapper.find("button").first();
      expect(
          loginButton.props().disabled
      ).toBe(true);
    });

    it("signup button should be enable if all field complete and no error", () => {
      const wrapper = shallow(<RegistrationForm signup />);
      wrapper.setState({ email: "test@mail.co", password: "password", passwordVerification: "password", username: "password" });
      const loginButton = wrapper.find("button").first();
      expect(
          loginButton.props().disabled
      ).toBe(false);
    });
  });
});
