import React from "react";
import ReactFilestack from 'filestack-react';


const UploadPicker = ({ onUploadSuccess }) => {

    const options = {
      "maxFiles": 1,
      "accept": [
        "video/mp4",
        "video/x-m4v",
        "video/*"
      ],
      "storeTo": {
        "container": "devportal-customers-assets",
        "path": "user-uploads/",
        "region": "us-east-1"
      },
      "fromSources": [
        "local_file_system",
        "url",
        "googledrive",
        "dropbox"
      ],
    };

    return(
        <div className="content-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 upload-page">
                  <div className="u-area">
                    <ReactFilestack
                      apikey={process.env.REACT_APP_API_KEY}
                      options={options}
                      onSuccess={(res) => {
                        const file = res.filesUploaded[0];
                        const video = {
                          name: file.filename,
                          handle: file.handle,
                          mimeType: file.mimetype,
                          url: file.url,
                          size: file.size
                        };
                        onUploadSuccess(video);
                      }}
                      onError={(err) => {console.log("Upload err", err)}}
                      render={({ onPick }) => (
                        <div>
                          <i className="cv cv cvicon-cv-upload-video"/>
                          <p className="u-text1">Select Video files to upload</p>
                          <button type="submit" onClick={onPick} className="btn btn-primary u-btn">Upload Video</button>
                        </div>
                      )}
                    />
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

export default UploadPicker


