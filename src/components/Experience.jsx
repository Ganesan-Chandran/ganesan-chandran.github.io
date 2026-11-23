import { useEffect, useRef } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "../data/content";

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight * 0.6 - rect.top) / rect.height;
      el.style.setProperty("--progress", Math.min(Math.max(progress, 0), 1));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
  <Section id="experience" eyebrow="02 / Experience" title="Where I've worked">
    <ol className="timeline" ref={timelineRef}>
      {experience.map((job) => {
        const highlights = job.highlights.filter((h) => !h.startsWith("["));
        return (
        <li key={job.company} className={job.current ? "current" : ""}>
          <Reveal>
            <div className="card job-card">
              <div className="job-head">
                <div className="job-title">
                  <span className="company-mark" aria-hidden="true">{job.company[0]}</span>
                  <h3>
                    <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                    {job.note && <small className="muted"> ({job.note})</small>}
                  </h3>
                </div>
                <span className="period">
                  {job.current && <span className="badge-current">Current</span>}
                  {job.period}
                </span>
              </div>
              <ul className="role-list">
                {job.roles.map(([role, period]) => (
                  <li key={role}><strong>{role}</strong><span>{period}</span></li>
                ))}
              </ul>
              {highlights.length > 0 && (
                <ul className="bullets">
                  {highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
        );
      })}
    </ol>
  </Section>
  );
};

export default Experience;
