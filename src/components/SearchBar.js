import React from "react";

export default class SearchBar extends React.Component {
  render(){
    return(
        <div className="topsearch">
          <div className="input-group">
            <span className="input-group-addon" id="sizing-addon2"><i className="fa fa-search"></i></span>
            <input type="text" className="form-control" placeholder="Search" aria-describedby="sizing-addon2"/>
          </div>
        </div>
    )
  }
}
