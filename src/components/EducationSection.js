import React from "react";
import "./EducationSection.css";
class EducationSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {
      schoolDegree,
      schoolGPA,
      schoolName,
      schoolYearStart,
      schoolYearEnd,
    } = this.props.educationInfo;
    return (
      <div className="educationSection">
        <div>
          <p className="duration">
            {schoolYearStart} - {schoolYearEnd}
          </p>
        </div>
        <div>
          <p>
            <span className="schoolDegree">{schoolDegree}</span> | {schoolName}
          </p>
          <p>GPA : {schoolGPA}</p>
        </div>
      </div>
    );
  }
}
export default EducationSection;
