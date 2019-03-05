import React from "react";

import UploadEdit from "./UploadEdit"
import UploadPicker from "./UploadPicker";
import requireLoggedIn from "../HOC/requireLoggedIn";
import LoadingSpinner from "../LoadingSpinner";
import { request } from "../../utils";


export class UploadContainer extends React.Component{
  state = {
    uploaded: false,
    loading: false,
    videoId: null
  };

  onUploadSuccess = (video) =>{
    this.setState({ uploaded: true, loading: true});
    request("post", "/upload/video", {}, video)
        .then(res => {
          console.log("video resolve+++",res);
          if(!res.error) return this.setState({ videoId: res.data.id, loading: false});
          return console.log(res.msg); // temp Let's check the error !
        })
        .catch(err => console.log(err)) // temp Let's check the error
  };

  render(){
    const { uploaded, loading, videoId } = this.state;
    const { history } = this.props;

    if(loading) return <LoadingSpinner text="Processing Your Video"/>;

    if(uploaded && !loading) return <UploadEdit videoId={videoId} redirect={() => history.push("/") }/>;
    return <UploadPicker onUploadSuccess={this.onUploadSuccess}/>
  }
}

export default requireLoggedIn(UploadContainer);
