import React from "react";
import { BeatLoader } from "react-spinners";

export default ({text, medium}) => (
    <div className="content-wrapper">
      <div className="container">
        <div className="row">
          <div className={medium? "col-lg-6 upload-page": "col-lg-12 upload-page" }>
            <div className="u-area">
              <BeatLoader
                  sizeUnit="px"
                  size={30}
                  color='#123abc'
                  loading
              />
              {text && <p>{text}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
);
