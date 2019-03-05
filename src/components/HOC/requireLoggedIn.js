import React from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  class ComposedComponent extends React.Component{
    componentDidMount = () => {
      this.shouldRedirectToHomePage();
    };

    componentDidUpdate = () => {
      this.shouldRedirectToHomePage();
    };

    shouldRedirectToHomePage = () => {
      const { token, history } = this.props;
      if(!token) history.push("/signin")
    };

    render(){
      return <ChildComponent {...this.props}/>
    }
  }
  const mapStateToProps = (state) => ({
    token: state.auth.userToken
  });

  return connect(mapStateToProps)(ComposedComponent);
}


