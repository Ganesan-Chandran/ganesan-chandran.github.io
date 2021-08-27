import React from "react";
import { Link } from "react-scroll"
import SideBar from "./SideBar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyWorks from "./MyWorks";
import Contact from "./Contact";
import { useEffect } from "react";
import BackToTop from "./BackToTop";
import Experience from "./Experience";
import Education from "./Education";
import Awards from "./Awards";
import { getCopyRightYear } from "./utilities/DateCalculator";
import "./css/Layout.css";
import "./css/FadeAnimation.css";

const Layout = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "assets/js/custom.js";
    script.async = true;
    document.body.appendChild(script);
    window.AOS.init();
  }, []);

  return (
    <div id="page-wraper" className="vg-page page-home" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/page-bg.jpg"}` }}>

      <BackToTop />

      <SideBar />

      <section className="section about-me" id="aboutme-section">
        <AboutMe />
      </section>

      <section className="section my-services" id="skills-section">
        <Skills />
      </section>

      <section className="section" id="experience-section">
        <Experience />
      </section>

      <section className="section mywork" id="myworks-section">
        <MyWorks />
      </section>

      <section className="section" id="awards-section">
        <Awards />
      </section>

      <section className="section" id="education-section">
        <Education />
      </section>

      <section className="section contact-me" id="contact-section">
        <Contact />
      </section>

      <section className="section copy-right-section">
        <div className="copyright-text">
          <span>Copyright © {getCopyRightYear()}. All rights reserved by <i><Link to="aboutme-section" className="link-to" spy={true} smooth={true}>Ganesan Chandran</Link>.</i></span>
        </div>
      </section>
    </div>
  )
}

export default Layout;