import React from "react";

export default function SimpleNote({ text, medium}){
  return (
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className={medium? "col-lg-6 upload-page": "col-lg-12 upload-page" }>
              <div className="u-area">
                {text}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
};
