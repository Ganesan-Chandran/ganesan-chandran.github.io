import React from "react";
import TypeWritingAnimator from "./utilities/TypeWritingAnimator"
import { getAge, getExperience } from "./utilities/DateCalculator"
import File from "./profile/Resume.pdf"
import "./css/AboutMe.css";

const AboutMe = () => {

  const onDownload = () => {
    const link = document.createElement('a');
    link.href = File;
    link.setAttribute('download', 'Ganesan_Chandran_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  React.useEffect(() => {
    var elements = document.getElementById('typewritetext');
    var toRotate = '["Full Stack Developer", "Technical Architect", "Tech Blogger", "Tech Community Contributor"]';
    var period = "2000";
    new TypeWritingAnimator(elements, JSON.parse(toRotate), period);
  }, []);

  return (
    <div className="container">
      <div id="aboutme-waypoint"></div>
      <div className="section-heading about-me-heading">
        <h2>About Me</h2>
        <div className="line-dec"></div>
      </div>
      <div className="left-image-post">
        <div className="row">
          <div className="col-md-5">
            <div className="left-image fade-in-left">
              <img src="assets/images/left-image-1.jpg" alt="" />
              <br />
              <br />
              <ul className="theme-list">
                <li><b>From:</b> Coimbatore, Tamil Nadu</li>
                <li><b>Lives In:</b> Chennai, Tamil Nadu</li>
                <li><b>Age:</b> {getAge()}</li>
                <li><b>Gender:</b> Male</li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <div className="right-text fade-in-right">
              <h1 style={{ color: "orange" }}>Ganesan Chandran</h1>
              <h5 id="typewritetext" className="typewrite">
                <span className="wrap"></span>
              </h5>
              <p> {getExperience()} years of experience in Software development with a variety of technologies
                such as Azure Services, AWS Services, AWS DevOps, .NET Core, React JS, Golang, Docker and Other Front-End technologies.</p>
              <p>I have experience in developing the WinForms applications and web applications, as well as applications based on Monolithic,
                Microservices, Micro-FrontEnd and Cloud. </p>
              <p>Passionate to discover new technologies, put into effect them in initiatives and
                writing technical blogs about them. </p>
              <p>I am Software Engineer, Software Developer, Technical Architect, Tech Blogger and Passionate Learner.
                I am contributing in Tech forums and published many articles/blogs in Tech Websites.</p>

              <div className="white-button">
                <button onClick={onDownload}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;