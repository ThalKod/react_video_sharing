import React from "react";
import { WithContext as ReactTags } from 'react-tag-input';

import { request, formatBytes, formatSecond } from "../../utils";
import LoadingSpinner from "../LaodingSpinner";

class UploadEdit extends React.Component{

  state = {
    name: "",
    size: 0,
    duration: 0,
    coverPhoto: null,
    loading: true,
    description: "",
    tags: [],
  };

  handleTagDelete = (i) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  };

  handleTagAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  };

 handleTagDrag = (tag, currPos, newPos) => {
   const { tags } = this.state;
   const tagsArr = [...tags];
   const newTags = tagsArr.slice();

   newTags.splice(currPos, 1);
   newTags.splice(newPos, 0, tag);

   // re-render
   this.setState({ tags: newTags });
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
    const {
      name,
      size,
      duration,
      coverPhoto,
      loading,
      description,
      tags} = this.state;

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
                         <div className="u-desc">Your video is uploaded, please edit, add tags and save.</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="container">
             <div className="row">
               <div className="col-lg-12">
                 <div className="u-form">
                   <div className="row">
                     <div className="col-lg-12">
                       <div className="form-group">
                         <label htmlFor="e1">Video Title</label>
                         <input
                             type="text"
                             className="form-control"
                             id="e1"
                             onChange={(e) => this.setState({ name: e.target.value })}
                             value={name}
                         />
                       </div>
                     </div>
                     <div className="col-lg-12">
                       <div className="form-group">
                         <label htmlFor="e2">About</label>
                         <textarea
                             onChange={e => this.setState({ description: e.target.value})}
                             value={description}
                             placeholder="Description of your video"
                             className="form-control"
                             name="e2"
                             id="e2"
                             rows="3"
                         />
                       </div>
                     </div>
                     <div className="col-lg-12">
                       <div className="form-group">
                         <ReactTags
                             tags={tags}
                             className="form-control"
                             handleDelete={this.handleTagDelete}
                             handleAddition={this.handleTagAddition}
                             handleDrag={this.handleTagDrag}
                             delimiters={[188, 13]}
                         />
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="u-area">
                     <button className="btn btn-primary u-btn" type="submit">Save</button>
                 </div>
                 <div className="u-terms">
                   <p>By submitting your videos to us, you acknowledge that you agree to circle's <a href="/">Terms
                     of Service</a> and <a href="/">Community Guidelines</a>.</p>
                   <p>Please be sure not to violate others' copyright or privacy rights. Learn more</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
    )
  }
}


export default UploadEdit;
