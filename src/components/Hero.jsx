import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Typewriter from "./Typewriter";
import Stats from "./Stats";
import { getExperience } from "./utilities/DateCalculator";
import { profile } from "../data/content";
import resume from "./profile/Resume.pdf";

const Hero = () => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    e.currentTarget.style.setProperty("--py", ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  };

  return (
    <section id="home" className="hero" onMouseMove={onMove}>
      <div className="blob blob-1" aria-hidden="true"></div>
      <div className="blob blob-2" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill"><i className="fa fa-map-marker" aria-hidden="true"></i> {profile.location}</span>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-role">
            <Typewriter words={profile.roles} />
          </p>
          <p className="hero-lead">
            Solution Architect with {getExperience()} years of experience designing and building cloud-native
            healthcare and insurance platforms on AWS, .NET and React. Creator of Fetch Client, an open-source
            API toolkit with 18k+ installs, and a C# Corner MVP.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={resume} download="Ganesan_Chandran_Resume.pdf">
              <i className="fa fa-file-pdf-o" aria-hidden="true"></i> Download CV
            </a>
            <Link to="contact" href="#contact" smooth duration={500} offset={-72} className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
          <div className="hero-social">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa fa-github"></i></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
            <a href={profile.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><i className="fa fa-envelope"></i></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <img ref={imgRef} src="/assets/images/author-image-orgnl.jpg" alt={`Portrait of ${profile.name}`}
              className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
          </div>
          <div className="float-badge badge-a"><i className="fa fa-star" aria-hidden="true"></i> C# Corner MVP</div>
          <div className="float-badge badge-b"><i className="fa fa-cloud" aria-hidden="true"></i> Solution Architect</div>
        </div>
      </div>
      <div className="container">
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
