import "./App.css";
import Fillup from "./components/Fillup";
import CV from "./components/CV";
import React from "react";
import uniqid from "uniqid";
import jsPDF from "jspdf";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: "Timothy Jay",
        middleName: "Toliongco",
        lastName: "Apolinario",
        email: "jjapolinario@gmail.com",
        phone: "09528593913",
        address: "Tokyo, Japan",
        linkedIn: "Linked In link",
        objective:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      educationInfo: [
        {
          id: uniqid(),
          schoolDegree: "Computer Science",
          schoolName: "University of the Cordilleras",
          schoolGPA: "1.0",
          schoolYearStart: "2019",
          schoolYearEnd: "2023",
        },
      ],
      experienceInfo: [
        {
          id: uniqid(),
          jobTitle: "Software Engineer",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
          jobCompany: "Google",
          jobYearStart: "2022",
          jobYearEnd: "Current",
        },
      ],
    };
  }
  updatePersonalInfo = (updatedPersonalInfo) => {
    this.setState({
      ...this.state,
      personalInfo: updatedPersonalInfo,
    });
  };
  updateEducationInfo = (newEducation) => {
    const updatedEducList = this.state.educationInfo.map((educ) => {
      if (educ.id === newEducation.id) {
        return newEducation;
      }
      return educ;
    });

    this.setState({
      ...this.state,
      educationInfo: updatedEducList,
    });
  };
  addEducation = () => {
    this.setState({
      ...this.state,
      educationInfo: this.state.educationInfo.concat({
        id: uniqid(),
        schoolDegree: "",
        schoolName: "",
        schoolGPA: "",
        schoolYearStart: "",
        schoolYearEnd: "",
      }),
    });
  };
  deleteEducation = (toDelEd) => {
    const updatedEducList = this.state.educationInfo.filter(
      (educ) => toDelEd.id !== educ.id
    );
    this.setState({
      ...this.state,
      educationInfo: updatedEducList,
    });
  };
  addExperience = (newExperience) => {
    this.setState({
      ...this.state,
      experienceInfo: this.state.experienceInfo.concat({
        id: uniqid(),
        jobTitle: "",
        jobCompany: "",
        jobYearStart: "",
        jobYearEnd: "",
      }),
    });
  };
  deleteExperience = (toDelExp) => {
    const updatedExpList = this.state.experienceInfo.filter(
      (exp) => toDelExp.id !== exp.id
    );
    this.setState({
      ...this.state,
      experienceInfo: updatedExpList,
    });
  };
  updateExperienceInfo = (newExperience) => {
    const updatedExpList = this.state.experienceInfo.map((exp) => {
      if (exp.id === newExperience.id) {
        return newExperience;
      }
      return exp;
    });

    this.setState({
      ...this.state,
      experienceInfo: updatedExpList,
    });
  };
  render() {
    return (
      <div className="App">
        <div className="fillUpContainer">
          <Fillup
            onPersonalInfoChange={this.updatePersonalInfo}
            onEducationInfoChange={this.updateEducationInfo}
            onExperienceInfoChange={this.updateExperienceInfo}
            onAddEducation={this.addEducation}
            onEducationDelete={this.deleteEducation}
            onExperienceDelete={this.deleteExperience}
            onAddExperience={this.addExperience}
            currentInfo={this.state}
          />
        </div>

        <CV userInfo={this.state} />
      </div>
    );
  }
}

export default App;
