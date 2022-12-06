import React from "react";
import "./PersonalEntry.css";
class PersonalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.currentInfo.personalInfo,
    };
  }
  handler = (e) => {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  };
  render() {
    return (
      <div className="personalEntry">
        <form>
          <div>
            <label htmlFor="first-name-input">First Name</label>
            <input
              id="first-name-input"
              name="firstName"
              onChange={this.handler}
              value={this.state.firstName}
            ></input>
          </div>
          <div>
            <label htmlFor="middle-name-input">Middle Name</label>
            <input
              id="middle-name-input"
              name="middleName"
              onChange={this.handler}
              value={this.state.middleName}
            ></input>
          </div>

          <div>
            <label htmlFor="last-name-input">LastName</label>
            <input
              id="last-name-input"
              name="lastName"
              onChange={this.handler}
              value={this.state.lastName}
            ></input>
          </div>

          <div>
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              name="email"
              onChange={this.handler}
              value={this.state.email}
            ></input>
          </div>

          <div>
            <label htmlFor="phone-input">Phone</label>
            <input
              id="phone-input"
              name="phone"
              onChange={this.handler}
              value={this.state.phone}
            ></input>
          </div>

          <div>
            <label htmlFor="address-input">Address</label>
            <input
              id="address-input"
              name="address"
              onChange={this.handler}
              value={this.state.address}
            ></input>
          </div>

          <div>
            <label htmlFor="objective-input">Objective</label>
            <textarea
              id="objective-input"
              name="objective"
              onChange={this.handler}
              value={this.state.objective}
              maxLength="250"
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default PersonalEntry;
