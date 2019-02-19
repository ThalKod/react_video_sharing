import React from "react";
import { connect } from "react-redux";

class UploadPicker extends React.Component{

  componentDidMount = () => {
    const { token, history } = this.props;
    if(!token) history.push("/signin");
  };

  render(){
    return(
        <div>Hello Picker</div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.userToken
});

export default connect(mapStateToProps)(UploadPicker);
