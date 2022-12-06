import React from "react";
import "./ExperienceEntry.css";
class ExperienceEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.currentInfo,
    };
  }
  handler = (e) => {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
        this.props.onExperienceInfoChange(this.state);
      }
    );
  };
  render() {
    return (
      <div className="experienceEntry">
        <form>
          <div>
            <label htmlFor="job-title">Job Title</label>
            <input
              id="job-title"
              name="jobTitle"
              onChange={this.handler}
              value={this.props.currentInfo.jobTitle}
            ></input>
          </div>
          <div>
            <label htmlFor="job-company">Company Name</label>
            <input
              id="job-company"
              name="jobCompany"
              onChange={this.handler}
              value={this.props.currentInfo.jobCompany}
            ></input>
          </div>
          <div>
            <label htmlFor="job-year-start">Year Start</label>
            <input
              id="job-year-start"
              name="jobYearStart"
              onChange={this.handler}
              value={this.props.currentInfo.jobYearStart}
            ></input>
          </div>

          <div>
            <label htmlFor="job-year-end">Year End</label>
            <input
              id="job-year-end"
              name="jobYearEnd"
              onChange={this.handler}
              value={this.props.currentInfo.jobYearEnd}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default ExperienceEntry;
