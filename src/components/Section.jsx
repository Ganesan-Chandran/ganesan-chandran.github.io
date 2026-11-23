import Reveal from "./Reveal";

const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="section">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
