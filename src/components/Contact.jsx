import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "../data/content";

const Contact = () => (
  <Section id="contact" eyebrow="06 / Contact" title="Let's talk">
    <Reveal>
      <div className="contact-panel">
        <p>
          Open to conversations about architecture, cloud and developer tooling. The quickest way to
          reach me is email.
        </p>
        <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
          <i className="fa fa-envelope" aria-hidden="true"></i> {profile.email}
        </a>
        <div className="hero-social">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa fa-github"></i></a>
          <a href={profile.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
        </div>
      </div>
    </Reveal>
  </Section>
);

export default Contact;
