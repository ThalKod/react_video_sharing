import React from "react";

export default function SimpleNote({ text}){
  return (
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 upload-page">
              <div className="u-area">
                {text}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
};
