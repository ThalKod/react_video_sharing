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
         <div className="content-wrapper upload-page edit-page">
           <div className="container-fluid u-details-wrap">
             <div className="row">
               <div className="container">
                 <div className="col-lg-12">
                   <div className="u-details">
                     <div className="row">
                       <div className="col-lg-12 ud-caption">Upload Details</div>
                       <div className="col-lg-2">
                         <div className="imgplace">
                           <img src={coverPhoto} alt="cover" />
                         </div>
                       </div>
                       <div className="col-lg-10">
                         <div className="u-title">{name}</div>
                         <div className="u-size">{size}.{duration}</div>
                         <div className="u-progress">
                           <div className="progress">
                             <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                  aria-valuemax="100" style={{"width": "100%"}}>
                               <span className="sr-only">100% Complete</span>
                             </div>
                           </div>
                           <div className="u-close">
                             <a href="/"><i className="cvicon-cv-cancel" /></a>
                           </div>
                         </div>
                         <div className="u-desc">Your video is uploaded, please edit and save.</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
    )
  }
}


export default UploadEdit;
