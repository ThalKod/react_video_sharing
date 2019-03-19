import  React from "react";

export default function VideoDescription({ description, tags}){
  return (
      <div className="info">
        <h4>Categories:</h4>
        <p>None Yet :)</p>

        <h4>About:</h4>
        <p>{description}</p>

        <h4>Tags:</h4>
        <p className="sv-tags">
          {tags.map(tag => {
            return <span key={tag.id}>{tag.text}</span>
          })}
        </p>
        <div className="row date-lic">
          <div className="col-lg-6">
            <h4>Release Date: </h4><br />
            <p>2 Days ago</p>
          </div>
        </div>
        <div className="showless">
          <a href="/">showless</a>
        </div>
      </div>
  )
};

