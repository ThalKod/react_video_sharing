import React from "react";


// Auhtor section and view count
export default function AuthorSection({ viewCount}){
  return(
      <div className="author">
        <div className="sv-name">
          name goes here
        </div>
        <div className="sv-views">
          <div className="sv-views-count">{ viewCount } Views</div>
        </div>
      </div>
  )
};
