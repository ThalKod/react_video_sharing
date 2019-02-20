import React from "react";

import requireLoggedIn from "./HOC/requireLoggedIn";

const UploadPicker = () => {
    return(
        <div className="content-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 upload-page">
                  <div className="u-area">
                    <i className="cv cv cvicon-cv-upload-video"/>

                    <p className="u-text1">Select Video files to upload</p>

                    <button type="submit" className="btn btn-primary u-btn">Upload Video</button>
                  </div>

                  <div className="u-terms">
                    <p>By submitting your videos to circle, you acknowledge that you agree to circle's <a href="/">Terms
                      of Service</a> and <a href="/">Community Guidelines</a>.</p>
                    <p>Please be sure not to violate others' copyright or privacy rights. Learn more</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default requireLoggedIn(UploadPicker);


