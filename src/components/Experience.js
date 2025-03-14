import "./css/Experience.css";

const Experience = () => {
  return (
    <div className="container">
      <div id="experience-waypoint"></div>
      <div className="experience-heading">
        <h2>Experience</h2>
        <h6>Work Experience</h6>
        <div className="line-dec"></div>
      </div>
      <ul className="timeline mt-4 pr-md-5">
        <li data-aos="fade-left" data-aos-once={true}>
          <div className="title">Mar 2025 - Current</div>
          <div className="details">
            <h5><a href="https://www.emishealth.com/" target="_blank" rel="noreferrer">Optum</a></h5>
            <small className="fg-theme">Solution Architect</small>
            <ul className="exp-theme-list">
              <li><b>Solution Architect</b> (Mar 2025 – Current)</li>
            </ul>
            <div className="acquisition-div">
              <i>"Continuation of previous role with EMIS due to acquisition."</i>
            </div>
          </div>
        </li>
        <li data-aos="fade-left" data-aos-once={true}>
          <div className="title">Jan 2018 - Current</div>
          <div className="details">
            <h5><a href="https://www.emishealth.com/" target="_blank" rel="noreferrer">EMIS Health India Pvt. Ltd</a></h5>
            <small className="fg-theme">Solution Architect</small>
            <ul className="exp-theme-list exp-theme-list-last">
              <li><b>Solution Architect</b> (Mar 2025 – Current)</li>
              <li><b>Senior Consultant (Technical Architect)</b> (Jul 2021 – Mar 2025)</li>
              <li><b>Consultant</b> (Jan 2020 – Jun 2021)</li>
              <li><b>Senior Associate</b> (Jan 2018 – Dec 2019)</li>
            </ul>
          </div>
        </li>
        <li data-aos="fade-right" data-aos-once={true}>
          <div className="title">Dec 2012 - Jan 2018</div>
          <div className="details">
            <h5><a href="https://www.tcs.com/" target="_blank" rel="noreferrer">Tata Consultancy Services</a></h5>
            <small className="fg-theme">IT Analyst</small>
            <ul className="exp-theme-list exp-theme-list-last">
              <li><b>IT Analyst</b> (Dec 2016 – Jan 2018)</li>
              <li><b>System Engineer</b> (Dec 2014 – Dec 2016)</li>
              <li><b>Assistant System Engineer</b> (Dec 2013 – Dec 2014)</li>
              <li><b>Assistant System Engineer Trainee</b> (Dec 2012 – Dec 2013)</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Experience;