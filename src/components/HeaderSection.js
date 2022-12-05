import React from "react";

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>First Name: {this.props.personalInfo.firstName}</p>
        <p>Middle Name: {this.props.personalInfo.middleName}</p>
        <p>Last Name: {this.props.personalInfo.lastName}</p>
      </div>
    );
  }
}
export default HeaderSection;
