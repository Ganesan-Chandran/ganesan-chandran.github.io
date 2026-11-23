import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "../data/content";

const Education = () => (
  <Section id="education" eyebrow="05 / Education" title="Where I studied">
    <div className="grid grid-3">
      {education.map((e, i) => (
        <Reveal key={e.title} delay={i * 60}>
          <div className="card edu-card">
            <span className="period">{e.period}</span>
            <h3>{e.title}</h3>
            <p className="muted">
              {e.url
                ? <a href={e.url} target="_blank" rel="noreferrer">{e.school}</a>
                : e.school}
            </p>
            <strong className="score">{e.score}</strong>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Education;
