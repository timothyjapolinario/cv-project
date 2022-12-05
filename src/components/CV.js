import React from "react";
import "./CV.css";
import PersonalSection from "./PersonalSection";
class CV extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CV" id="CV">
        <PersonalSection personalInfo={this.props.userInfo.personalInfo} />
      </div>
    );
  }
}

export default CV;
