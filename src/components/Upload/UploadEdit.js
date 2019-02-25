import React from "react";

import { request, formatBytes, formatSecond } from "../../utils";
import LoadingSpinner from "../LaodingSpinner";

class UploadEdit extends React.Component{

  state = {
    name: "",
    size: 0,
    duration: 0,
    coverPhoto: null,
    loading: true,
  };

  componentDidMount = () => {
    const { videoId } = this.props;
    const getBasicInfo = request("get", `/video/basic/${videoId}`);
    const getImage = request("get", `/video/cover/default/${videoId}`);

    Promise.all([getBasicInfo, getImage])
        .then(res => this.setState({ ...res[0].data.video, ...res[1].data, loading: false }))
        .catch(err => console.log(err));
  };

  render(){
    const { name, size, duration, coverPhoto, loading } = this.state;

    if(loading) return <LoadingSpinner/>;

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
                         <div className="u-size"><b>Size :</b> {formatBytes(size)} <b>Length:</b> {formatSecond(duration)}</div>
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
