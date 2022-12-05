import React from "react";

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
      <div>
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
        </form>
      </div>
    );
  }
}

export default PersonalEntry;
