import React from "react";
import "./PersonalSection.css";
class PersonalSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {
      firstName,
      middleName,
      lastName,
      email,
      phone,
      address,
      linkedIn,
      objective,
    } = this.props.personalInfo;
    return (
      <div>
        <div id="fullName">
          {firstName} {middleName} {lastName}
        </div>
        <div id="contact">
          <div id="email">[{email}]</div>
          <div id="phone">[{phone}]</div>
          <div id="address">[{address}]</div>
          <div id="linkedIn">[{linkedIn}]</div>
        </div>
        <div>
          <h3>Objective</h3>
          <p id="objective">{objective}</p>
        </div>
      </div>
    );
  }
}
export default PersonalSection;
