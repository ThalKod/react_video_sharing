import React from "react";


export default class SearchBar extends React.Component{

  state = {
    text: ""
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { text } = this.state;
    const { submit } = this.props;
    if(!text) return;

    submit(text);
  };

  render(){
    const { text } = this.state;
    return(
        <div className="topsearch">
          <div className="input-group">
            <span className="input-group-addon" id="sizing-addon2"><i className="fa fa-search"/></span>
            <form onSubmit={this.onSubmit}>
              <input
                  type="text"
                  value={text}
                  onChange={(e) => this.setState({ text: e.target.value})}
                  className="form-control"
                  placeholder="Search"
                  aria-describedby="sizing-addon2"
              />
            </form>
          </div>
        </div>
    )
  }
}
