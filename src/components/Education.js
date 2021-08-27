import "./css/Experience.css";

const Education = () => {
  return (
    <div className="container">
      <div className="experience-heading">
        <h2>Education</h2>
        <div className="line-dec"></div>
      </div>
      <ul className="timeline mt-4 pr-md-5">
        <li data-aos="fade-right" data-aos-once={true}>
          <div className="title">Aug 2008 - Mar 2012</div>
          <div className="details">
            <h5>B.Tech (Information Technology)</h5>
            <small className="fg-theme"><a href="http://www.skcet.ac.in/" target="_blank" rel="noreferrer">Sri Krishna College of Engineering and Technology, Coimbatore, Tamil Nadu, India</a></small>
            <p>CGPA - 8.99 (89.9%)</p>
          </div>
        </li>
        <li data-aos="fade-left" data-aos-once={true}>
          <div className="title">Jun 2007 - Mar 2008</div>
          <div className="details">
            <h5>HSC</h5>
            <small className="fg-theme">Kadri Mills Hr.Sec School, Coimbatore, Tamil Nadu, India</small>
            <p>Percentage - 91.25%</p>
          </div>
        </li>
        <li data-aos="fade-right" data-aos-once={true}>
          <div className="title">Jun 2005 - Apr 2006</div>
          <div className="details" >
            <h5>SSLC</h5>
            <small className="fg-theme">Govt. High School, Coimbatore, Tamil Nadu, India</small>
            <p>Percentage - 84.8%</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;