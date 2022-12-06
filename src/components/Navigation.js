import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBriefcase,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import fontawesome from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navigation.css";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIcons: [],
    };
  }

  renderPageIndicator = () => {
    return <div></div>;
  };
  render() {
    return (
      <div className="Navigation">
        <FontAwesomeIcon icon={faPerson} />
        <FontAwesomeIcon icon={faBook} />
        <FontAwesomeIcon icon={faBriefcase} />
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
