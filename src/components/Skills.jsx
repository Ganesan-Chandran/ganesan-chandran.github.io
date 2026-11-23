import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups, skillIcons } from "../data/content";

const Skills = () => (
  <Section id="skills" eyebrow="01 / Skills" title="What I work with">
    <Reveal>
      <p className="section-lead">
        I work in Agile teams with clients and stakeholders to shape requirements, design solutions, estimate
        effort and make sure business goals are met, mostly in the healthcare and insurance domains.
      </p>
    </Reveal>
    <div className="grid grid-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={i * 60}>
          <div className="card skill-card">
            <div className="card-icon"><i className={`fa ${group.icon}`} aria-hidden="true"></i></div>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {skillIcons[item] && <i className={skillIcons[item]} aria-hidden="true"></i>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
