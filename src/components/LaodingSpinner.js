import React from "react";
import { BeatLoader } from "react-spinners";

export default ({text}) => (
    <div className="content-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 upload-page">
            <div className="u-area">
              <BeatLoader
                  sizeUnit="px"
                  size={30}
                  color='#123abc'
                  loading
              />
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
);
