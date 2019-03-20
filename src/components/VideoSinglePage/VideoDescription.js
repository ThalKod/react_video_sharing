import  React from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class VideoDescription extends React.Component{

  state = {
    showDescription: false
  };

  toggleShowDescription = () => {
    const { showDescription } = this.state;
    this.setState({ showDescription: !showDescription });
  };

  render(){
    const { description, tags} = this.props;
    const { showDescription } = this.state;

    const descriptionItems = (
        <div>
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
        </div>
    );

    return (
        <div className="info">
          <h4>Categories:</h4>
          <p>None Yet :)</p>
          <ReactCSSTransitionGroup
              transitionName="menu"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
            { showDescription && descriptionItems }
          </ReactCSSTransitionGroup>
          <div className="showless">
            <button onClick={this.toggleShowDescription} type="submit">{ showDescription ? "Show Less" : "Show more"}</button>
          </div>
        </div>
    )
  }
}

