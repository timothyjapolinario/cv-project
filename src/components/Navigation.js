import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBriefcase,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Navigation.css";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIcons: [],
    };
  }

  renderNavIndicator = () => {
    return (
      <div className="navIndicators">
        <FontAwesomeIcon
          icon={faPerson}
          className={
            (this.props.currentPageIndex === 1 ? "activeNav " : "") +
            "navIndicator"
          }
        />
        <FontAwesomeIcon
          icon={faBook}
          className={
            (this.props.currentPageIndex === 2 ? "activeNav " : "") +
            "navIndicator"
          }
        />
        <FontAwesomeIcon
          icon={faBriefcase}
          className={
            (this.props.currentPageIndex === 3 ? "activeNav " : "") +
            "navIndicator"
          }
        />
      </div>
    );
  };
  render() {
    return (
      <div className="Navigation">
        <div className="navigationButtonList">
          <div
            className="navButton"
            id="previous-button"
            onClick={this.props.onPrevious}
          >
            Previous
          </div>
          {this.renderNavIndicator()}
          <div
            className="navButton"
            id="next-button"
            onClick={this.props.onNext}
          >
            Next
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
