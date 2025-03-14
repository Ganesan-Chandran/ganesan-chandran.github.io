import { useEffect, useState } from "react";
import "./css/MyWorks.css";
import { getArticleCountRound } from "./utilities/DateCalculator";
import { readRssFeed } from "./utilities/ReadRssFeed";

const MyWorks = () => {
  const [articleCount, setArticleCount] = useState(25);

  useEffect(() => {
    const gerCSharpCornerData = async () => {
      const data = await readRssFeed('https://www.c-sharpcorner.com/members/ganesan-c5/rss');
      setArticleCount(data ?? 29);
    }
    gerCSharpCornerData();
  }, []);

  return (
    <div className="container">
      <div id="myworks-waypoint"></div>
      <div className="section-heading mywork-heading">
        <h2>My Work</h2>
        <div className="line-dec"></div>
      </div>
      <div className="row skills-left-image">
        <div className="col-md-5">
          <div className="left-image" data-aos="fade-right" data-aos-once={true}>
            <img src="assets/images/mywork-2.png" alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="right-text" data-aos="fade-left" data-aos-once={true}>
            <p>I've worked from the ground up on various projects like a migration project, functionality enhancement project,
              and new projects from scratch. Managed mutiple teams as a team leader and delivered the projects on time without compromising on quality.</p>
            <p>I am contributing in various Tech forums and published {getArticleCountRound(articleCount)} articles on different technologies.</p>
          </div>
        </div>
      </div>
      <div id="work-counter-animation" className="work-counter" data-aos="fade-right" data-aos-once={true}>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <h1 className="animateNumber" data-number={articleCount}>0</h1>
              <span>ARTICLES</span>
            </div>
            <div className="col-lg">
              <h1 className="animateNumber" data-number="4">0</h1>
              <span>CLIENTS</span>
            </div>
            <div className="col-lg">
              <h1 className="animateNumber" data-number="7">0</h1>
              <span>PROJECTS</span>
            </div>
            <div className="col-lg">
              <h1 className="animateNumber" data-number="5">0</h1>
              <span>TEAMS</span>
            </div>
            <div className="col-lg">
              <h1 className="animateNumber" data-number="4">0</h1>
              <span>AWARDS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mywork-section" data-aos="fade-right" data-aos-once={true}>
            <div className="award-heading-desc">Articles</div>
            <ul className="point-list">
              <li>
                <a className="mywork-link" href="https://www.c-sharpcorner.com/members/ganesan-c5/articles"
                  rel="noreferrer" target="_blank">
                  <span>C# Corner</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mywork-section" data-aos="fade-left" data-aos-once={true}>
            <div className="award-heading-desc">Tech Forum</div>
            <ul className="point-list">
              <li>
                <a className="mywork-link" href="https://www.c-sharpcorner.com/members/ganesan-c5/forums"
                  rel="noreferrer" target="_blank">
                  <span>C# Corner</span>
                </a>
              </li>
              <li>
                <a className="mywork-link" href="https://stackoverflow.com/users/6046499/ganesan-c"
                  rel="noreferrer" target="_blank">
                  <span>Stack Overflow</span>
                </a>
              </li>
              <li>
                <a className="mywork-link" href="https://social.msdn.microsoft.com/profile/ganesan%20c/"
                  rel="noreferrer" target="_blank">
                  <span>MSDN</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;