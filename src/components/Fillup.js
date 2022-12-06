import React from "react";
import PersonalEntry from "./PersonalEntry";
import ExperienceEntry from "./ExperienceEntry";
import "./Fillup.css";
import Navigation from "./Navigation";
import EducationEntry from "./EducationEntry";
class Fillup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 1,
    };
  }
  getCurrentPage = () => {
    const { currentPageIndex } = this.state;
    let currentPage;
    if (currentPageIndex === 1) {
      currentPage = (
        <div>
          <h2>Personal</h2>
          <PersonalEntry
            onChange={this.props.onPersonalInfoChange}
            currentInfo={this.props.currentInfo}
          />
        </div>
      );
    } else if (currentPageIndex === 2) {
      const educationInfoList = this.props.currentInfo.educationInfo;
      const renderedEducList = educationInfoList.map((info) => {
        return (
          <div key={info.id}>
            <h2>
              Education
              <span onClick={() => this.props.onEducationDelete(info)}>
                [Del]
              </span>
            </h2>

            <EducationEntry
              currentInfo={info}
              onEducationInfoChange={this.props.onEducationInfoChange}
            />
          </div>
        );
      });
      currentPage = (
        <div>
          {renderedEducList}
          <div className="addEntryButton" onClick={this.props.onAddEducation}>
            Add
          </div>
        </div>
      );
    } else {
      const experienceInfoList = this.props.currentInfo.experienceInfo;
      const renderedExperienceList = experienceInfoList.map((info) => {
        return (
          <div key={info.id}>
            <h2>
              Work Experience{" "}
              <span onClick={() => this.props.onExperienceDelete(info)}>
                [Del]
              </span>
            </h2>
            <ExperienceEntry
              currentInfo={info}
              onExperienceInfoChange={this.props.onExperienceInfoChange}
            />
          </div>
        );
      });
      currentPage = (
        <div>
          {renderedExperienceList}
          <div className="addEntryButton" onClick={this.props.onAddExperience}>
            Add
          </div>
        </div>
      );
    }
    return currentPage;
  };
  getPrevious = () => {
    const currentIndex = this.state.currentPageIndex;
    if (currentIndex === 1) {
      this.setState({
        currentPageIndex: 3,
      });
      return;
    }
    this.setState({
      currentPageIndex: currentIndex - 1,
    });
  };
  getNext = () => {
    const currentIndex = this.state.currentPageIndex;
    if (currentIndex === 3) {
      this.setState({
        currentPageIndex: 1,
      });
      return;
    }
    this.setState({
      currentPageIndex: currentIndex + 1,
    });
  };
  render() {
    return (
      <div className="Fillup">
        <h1>Fill-Up Form</h1>
        <div></div>
        <div className="entryList">{this.getCurrentPage()}</div>
        <Navigation
          onPrevious={this.getPrevious}
          onNext={this.getNext}
          currentPageIndex={this.state.currentPageIndex}
        />
      </div>
    );
  }
}
export default Fillup;
