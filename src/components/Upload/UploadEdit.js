import React from "react";

import { request } from "../../utils";

class UploadEdit extends React.Component{

  state = {
    name: "",
    size: 0,
    duration: 0,
    coverPhoto: null,
  };

  componentDidMount = () => {
    // const { videoId } = this.props;
    const getBasicInfo = request("get", `/video/basic/5c743c4062c93e05613ffdb0`);
    const getImage = request("get", "/video/cover/default/5c743c4062c93e05613ffdb0");

    Promise.all([getBasicInfo, getImage])
        .then(res => this.setState({ ...res[0].data.video, ...res[1].data }))
        .catch(err => console.log(err));
  };

  render(){
    const { name, duration, size, coverPhoto } = this.state;
    return (
        <div>
          <div>{`${name}${duration}${size}`}</div>
          <div><img src={coverPhoto} alt="he"/></div>
        </div>
    )
  }
}


export default UploadEdit;
