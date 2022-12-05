import React from "react";
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
      <div>
        <p>{schoolDegree}</p>
        <p>{schoolGPA}</p>
        <p>{schoolName}</p>
        <p>
          {schoolYearStart} - {schoolYearEnd}
        </p>
      </div>
    );
  }
}
export default EducationSection;
