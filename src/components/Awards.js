
import "./css/Awards.css";

const Awards = () => {
  return (
    <div className="container">
      <div className="section-heading mywork-heading">
        <h2>Recognition &amp; Awards</h2>
        <div className="line-dec"></div>
      </div>
      <div className="row skills-left-image">
        <div className="col-md-3">
          <div className="left-image" data-aos="fade-right" data-aos-once={true}>
            <img src="assets/images/awards.png" alt="" style={{ height: "200px", width: "275px" }} />
          </div>
        </div>
        <div className="col-md-9">
          <div className="right-text" data-aos="fade-left" data-aos-once={true}>
            <br />
            <br />
            <p>Received several awards from the organization for delivering quality and valuable projects on time.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div data-aos="fade-right" data-aos-once={true}>
          <div className="award-heading-desc">C# Corner</div>
          <ul className="point-list">
            <li><a className="c-sharp-corner-awards" href="https://www.c-sharpcorner.com/members/ganesan-c5/awards" target="_blank" rel="noreferrer">MVP (Most Valuable Professional) - Sep 2021</a></li>
            <li><a className="c-sharp-corner-awards" href="https://www.c-sharpcorner.com/members/ganesan-c5/awards" target="_blank" rel="noreferrer">MVP (Most Valuable Professional) - Sep 2022</a></li>
            <li><a className="c-sharp-corner-awards" href="https://www.c-sharpcorner.com/members/ganesan-c5/awards" target="_blank" rel="noreferrer">MVP (Most Valuable Professional) - Dec 2024</a></li>
            <li><a className="c-sharp-corner-awards" href="https://www.c-sharpcorner.com/members/ganesan-c5/awards" target="_blank" rel="noreferrer">Member of the Month - Aug 2021</a></li>
          </ul>
        </div>
        <br />
        <div data-aos="fade-right" data-aos-once={true}>
          <div className="award-heading-desc">EMIS Health India Pvt. Ltd</div>
          <ul className="point-list">
            <li>Sprint Champion - 2018 Q3</li>
          </ul>
        </div>
        <br />
        <div data-aos="fade-left" data-aos-once={true}>
          <div className="award-heading-desc">Tata Consultancy Services</div>
          <ul className="point-list">
            <li>On The Spot Award (Best Performer)
              <ul className="point-list-inner">
                <li>2017 ( 2 Times - Jun &amp; Oct )</li>
                <li>2016 ( 2 Times - Jan &amp; Feb )</li>
                <li>2015 ( 2 Times - Apr &amp; May )</li>
              </ul>
            </li>
          </ul>
        </div>
        <br />
        <div data-aos="fade-left" data-aos-once={true}>
          <div className="award-heading-desc">Academics</div>
          <ul className="point-list">
            <li>Awarded 44th Rank among 3932 graduates in the B.Tech(IT) in 2008-2012</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Awards;