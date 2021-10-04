import { Link } from "react-scroll"
import "./css/SideBar.css";

const SideBar = () => {
  return (
    <div className="responsive-nav">
      <i className="fa fa-bars" id="menu-toggle"></i>
      <div id="menu" className="menu">
        <i className="fa fa-times" id="menu-close"></i>
        <div className="container">
          <div className="image">
            <Link to="about-me" spy={true} smooth={true}>
              <img src="assets/images/author-image.jpg" alt="" />
            </Link>
          </div>
          <div className="author-content">
            <h4>Ganesan Chandran</h4>
            <span>Software Engineer</span>
          </div>
          <nav id="main-nav" className="main-nav" role="navigation">
            <ul className="main-menu">
              <li>
                <Link to="aboutme-section"activeClass="menu-active" spy={true} smooth={true} className="menu-override">About Me</Link>
              </li>
              <li>
                <Link to="skills-section" activeClass="menu-active" spy={true} smooth={true}  className="menu-override">What I’m good at</Link>
              </li>
              <li>
                <Link to="experience-section" activeClass="menu-active" spy={true} smooth={true} className="menu-override">Experience</Link>
              </li>
              <li>
                <Link to="myworks-section" activeClass="menu-active" spy={true} smooth={true} className="menu-override">My Works</Link>
              </li>
              <li>
                <Link to="awards-section" activeClass="menu-active" spy={true} smooth={true} className="menu-override">Awards</Link>
              </li>
              <li>
                <Link to="education-section" activeClass="menu-active" spy={true} smooth={true} className="menu-override">Education</Link>
              </li>
              <li>
                <Link to="contact-section" activeClass="menu-active" spy={true} smooth={true} className="menu-override">Contact Me</Link>
              </li>
            </ul>
          </nav>
          <div className="social-network">
            <ul className="soial-icons">
              <li>
                <a className="linkedInColor" href="https://www.linkedin.com/in/ganesan-chandran-677a15133/" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a className="twitterColor" href="https://twitter.com/GanesanChandran" rel="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
              </li>
              <li>
                <a className="gitHubColor" href="https://github.com/Ganesan-Chandran" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar;