import React from "react";
import "./Navigation.css";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Navigation">
        <div
          className="navButton"
          id="previous-button"
          onClick={this.props.onPrevious}
        >
          Previous
        </div>
        <div className="navButton" id="next-button" onClick={this.props.onNext}>
          Next
        </div>
      </div>
    );
  }
}
export default Navigation;
