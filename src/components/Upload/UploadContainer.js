import React from "react";

import UploadEdit from "components/Upload/UploadEdit"
import UploadPicker from "components/Upload/UploadPicker";
import requireLoggedIn from "components/HOC/requireLoggedIn";
import LoadingSpinner from "components/Common/LoadingSpinner";
import { request } from "utils";


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
