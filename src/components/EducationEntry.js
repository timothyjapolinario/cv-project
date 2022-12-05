import React from "react";
import "./EducationEntry.css";
class EducationEntry extends React.Component {
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
        this.props.onEducationInfoChange(this.state);
      }
    );
  };
  render() {
    return (
      <div className="educationEntry">
        <form>
          <div>
            <label htmlFor="school-degree">Degree</label>
            <input
              id="school-degree"
              name="schoolDegree"
              onChange={this.handler}
              value={this.props.currentInfo.schoolDegree}
            ></input>
          </div>
          <div>
            <label htmlFor="school-name">School Name</label>
            <input
              id="school-name"
              name="schoolName"
              onChange={this.handler}
              value={this.props.currentInfo.schoolName}
            ></input>
          </div>
          <div>
            <label htmlFor="school-gpa">GPA</label>
            <input
              id="school-gpa"
              name="schoolGPA"
              onChange={this.handler}
              value={this.props.currentInfo.schoolGPA}
            ></input>
          </div>
          <div>
            <label htmlFor="school-year-start">Year Start</label>
            <input
              id="school-year-start"
              name="schoolYearStart"
              onChange={this.handler}
              value={this.props.currentInfo.schoolYearStart}
            ></input>
          </div>
          <div>
            <label htmlFor="school-year-end">Year End</label>
            <input
              id="school-year-end"
              name="schoolYearEnd"
              onChange={this.handler}
              value={this.props.currentInfo.schoolYearEnd}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default EducationEntry;
