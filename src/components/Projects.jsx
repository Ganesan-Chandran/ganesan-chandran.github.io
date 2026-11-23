import Section from "./Section";
import Reveal from "./Reveal";
import { community, projects } from "../data/content";

const Links = ({ links }) => (
  <div className="link-row">
    {links.map(([label, url]) => (
      <a key={label} href={url} target="_blank" rel="noreferrer" className="text-link">
        {label} <i className="fa fa-external-link" aria-hidden="true"></i>
      </a>
    ))}
  </div>
);

const Projects = () => {
  const [featured, ...rest] = projects;
  // Entries still holding "[placeholder]" titles stay hidden until filled in.
  const others = rest.filter((p) => !p.title.startsWith("["));

  return (
    <Section id="projects" eyebrow="03 / Projects" title="Things I've built">
      <Reveal>
        <div className="featured">
          <div className="featured-inner">
            <div>
              <span className="pill">Featured &middot; Open source</span>
              <h3>{featured.title}</h3>
              <p className="featured-tagline">{featured.tagline}</p>
              <p>{featured.description}</p>
              <ul className="feature-list">
                {featured.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <div className="chips">
                {featured.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <Links links={featured.links} />
            </div>
            <div className="featured-stats">
              {featured.stats.map(([value, label]) => (
                <div key={label}><strong className="gradient-text">{value}</strong><span>{label}</span></div>
              ))}
            </div>
            {featured.screenshot && (
              <a className="shot" href={featured.links[0][1]} target="_blank" rel="noreferrer"
                aria-label="Open Fetch Client on the VS Code Marketplace">
                <div className="shot-bar" aria-hidden="true"><span></span><span></span><span></span></div>
                <img src={featured.screenshot} alt="Fetch Client running inside VS Code with a request and JSON response" loading="lazy" />
              </a>
            )}
          </div>
        </div>
      </Reveal>

      {others.length > 0 && (
        <div className="grid grid-2 spaced">
          {others.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card project-card">
                <h3>{p.title}</h3>
                <p className="muted">{p.tagline}</p>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
                {p.links.length > 0 && <Links links={p.links} />}
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal>
        <h3 className="subhead">Community</h3>
        <div className="grid grid-4">
          {community.map((c) => (
            <a key={c.label} href={c.url} target="_blank" rel="noreferrer" className="card link-card">
              <i className={`fa ${c.icon}`} aria-hidden="true"></i>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default Projects;
