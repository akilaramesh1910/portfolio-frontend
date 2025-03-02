import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <p className="education-description" style={{ color: theme.text, marginTop: '15px', lineHeight: '1.6' }}>
                  As an Electronics and Communication Engineering graduate, I've cultivated a passion for continuous learning and technological innovation. 
                  My academic journey has been driven by curiosity, exploring interdisciplinary skills that bridge hardware and software domains. 
                  Through rigorous coursework and hands-on projects, I've developed a holistic approach to problem-solving, blending technical expertise with creative thinking.
                </p>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
