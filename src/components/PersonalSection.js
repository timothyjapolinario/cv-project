import React from "react";

class PersonalSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div id="fullName">
        <p>
          {this.props.personalInfo.firstName}{" "}
          {this.props.personalInfo.middleName}{" "}
          {this.props.personalInfo.lastName}
        </p>
      </div>
    );
  }
}
export default PersonalSection;
