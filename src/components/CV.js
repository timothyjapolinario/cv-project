import React from "react";
import "./CV.css";
import HeaderSection from "./HeaderSection";
class CV extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const renderedEduc = this.props.userInfo.educationInfo.map((educInfo)=>{
    //   return(
    //     <p></p>
    //   )
    // })
    return (
      <div className="CV" id="CV">
        <HeaderSection personalInfo={this.props.userInfo.personalInfo} />
      </div>
    );
  }
}

export default CV;
