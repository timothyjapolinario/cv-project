import React from "react";
class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { jobCompany, jobTitle, jobDescription, jobYearStart, jobYearEnd } =
      this.props.experienceInfo;
    return (
      <div>
        <p>{jobCompany}</p>
        <p>{jobDescription}</p>
        <p>{jobTitle}</p>
        <p>
          {jobYearStart} - {jobYearEnd}
        </p>
      </div>
    );
  }
}
export default ExperienceSection;