import React from "react";
import "./CV.css";
import EducationSection from "./EducationSection";
import PersonalSection from "./PersonalSection";
import ExperienceSection from "./ExperienceSection";
class CV extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const renderedEducationList = this.props.userInfo.educationInfo.map(
      (educationInfo) => {
        return (
          <EducationSection
            key={educationInfo.id + "rd"}
            educationInfo={educationInfo}
          />
        );
      }
    );
    const renderedExperienceList = this.props.userInfo.experienceInfo.map(
      (experienceInfo) => {
        return (
          <ExperienceSection
            key={experienceInfo.id + "rd"}
            experienceInfo={experienceInfo}
          />
        );
      }
    );
    return (
      <div className="CV" id="CV">
        <div>
          <PersonalSection personalInfo={this.props.userInfo.personalInfo} />
        </div>

        <div>
          <h3 className="sectionHeader">Experience</h3>
          {renderedExperienceList}
        </div>

        <div>
          <h3 className="sectionHeader">Education</h3>
          {renderedEducationList}
        </div>
      </div>
    );
  }
}

export default CV;
