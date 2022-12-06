import React from "react";
import "./ExperienceSection.css";
class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { jobCompany, jobTitle, jobDescription, jobYearStart, jobYearEnd } =
      this.props.experienceInfo;
    return (
      <div className="experienceSection">
        <div>
          <p className="duration">
            {jobYearStart} - {jobYearEnd}
          </p>
        </div>
        <div>
          <p>
            <span className="jobTitle">{jobTitle + "   "}</span> | {jobCompany}
          </p>
          <p>{jobDescription}</p>
        </div>
      </div>
    );
  }
}
export default ExperienceSection;
