import React from "react";

import UploadEdit from "./UploadEdit"
import UploadPicker from "./UploadPicker";
import requireLoggedIn from "../HOC/requireLoggedIn";


class UploadContainer extends React.Component{
  state = {
    uploaded: false,
  };

  onUploadSuccess = () =>{
    this.setState({ uploaded: true})
  };

  render(){
    const { uploaded } = this.state;

    if(uploaded) return <UploadEdit/>;
    return <UploadPicker onUploadSuccess={this.onUploadSuccess}/>
  }
}

export default requireLoggedIn(UploadContainer);
