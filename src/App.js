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
        firstName: "John",
        middleName: "Llyod",
        lastName: "Cruz",
        email: "JohnLloydCruz@gmail.com",
      },
      educationInfo: [
        {
          id: uniqid(),
          schoolDegree: "",
          schoolName: "",
          schoolGPA: "",
          schoolYearStart: "",
          schoolYearEnd: "",
        },
      ],
      experienceInfo: [
        {
          id: uniqid(),
          jobTitle: "",
          jobCompany: "",
          jobYearStart: "",
          jobYearEnd: "",
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

    this.setState(
      {
        ...this.state,
        educationInfo: updatedEducList,
      },
      () => {
        console.log(this.state);
      }
    );
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
