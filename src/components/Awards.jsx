import Section from "./Section";
import Reveal from "./Reveal";
import { awards } from "../data/content";

const Awards = () => (
  <Section id="awards" eyebrow="04 / Recognition" title="Awards & achievements">
    <div className="grid grid-2">
      {awards.map((a, i) => (
        <Reveal key={a.org} delay={i * 60}>
          <div className="card award-card">
            <div className="card-icon"><i className="fa fa-trophy" aria-hidden="true"></i></div>
            <h3>
              {a.url
                ? <a href={a.url} target="_blank" rel="noreferrer">{a.org}</a>
                : a.org}
            </h3>
            <ul className="bullets">
              {a.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Awards;
