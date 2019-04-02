import React from "react";
import { connect } from "react-redux";

class Search extends React.Component{

  state = {

  };

  render(){
    const { query } = this.props;
    return <div>Hello World ! {query}</div>
  }
}

const mapStateToProps = (state) => ({
  query: state.video.searched.query
});

export default connect(mapStateToProps)(Search);

