import "./css/Skills.css";

const Skills = () => {

  const Skills = {
    JavaScript: "90%",
    CSharp: "90%",
    AWS: "75%",
    Terraform: "85%",
    React: "85%",
    Devops: "70%",
    Golang: "75%",
    SQL: "85%",
    Web: "90%",
    WinForm: "90%"
  };

  return (
    <div className="container">
      <div className="section-heading skills-heading">
        <div id="skills-waypoint"></div>
        <h2>What I’m good at?</h2>
        <div className="line-dec"></div>
      </div>
      <div className="row skills-left-image">
        <div className="col-md-5">
          <div className="left-image" data-aos="fade-right" data-aos-once={true}>
            <img src="assets/images/programming-tech.png" alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="right-text" data-aos="fade-left" data-aos-once={true}>
            <br />
            <br />
            <p>Experience in AGILE methodology. Work with clients, managers to providing
              inputs throughout project and coming up with resource requirements, design solutions,
              development estimates, and so forth and confirm business objectives are met.
              Having good experience in Insurance, Health Domain.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-right" data-aos-once={true}>
            <span className="caption">JavaScript</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.JavaScript }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.JavaScript}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-left" data-aos-once={true}>
            <span className="caption">ReactJS</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.React }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.React}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-right" data-aos-once={true}>
            <span className="caption">C#</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.CSharp }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.CSharp}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-left" data-aos-once={true}>
            <span className="caption">SQL</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.SQL }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.SQL}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-right" data-aos-once={true}>
            <span className="caption">AWS</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.AWS }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.AWS}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-left" data-aos-once={true}>
            <span className="caption">Terraform</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.Terraform }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.Terraform}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-right" data-aos-once={true}>
            <span className="caption">Windows Application</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.WinForm }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.WinForm}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-left" data-aos-once={true}>
            <span className="caption">Web Application</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.Web }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.Web}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="progress-wrapper" data-aos="fade-right" data-aos-once={true}>
            <span className="caption">DevOps</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: Skills.Devops }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{Skills.Devops}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;