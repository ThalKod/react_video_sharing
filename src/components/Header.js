import React from 'react';

import SearchBar from "./SearchBar";

export default class Header extends React.Component{
  render(){
    return (
        <div>
          <div className="col-lg-6 col-sm-8 col-xs-12">
            <SearchBar />
          </div>
        </div>
    )
  }
}
