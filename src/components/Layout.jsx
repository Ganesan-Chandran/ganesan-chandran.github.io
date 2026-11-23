import Header from "./Header";
import { useEffect } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards";
import Education from "./Education";
import Contact from "./Contact";
import BackToTop from "./BackToTop";
import { getCopyRightYear } from "./utilities/DateCalculator";
import { profile } from "../data/content";

const Layout = () => {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
  <>
    <Header />
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Education />
      <Contact />
    </main>
    <footer className="footer">
      <div className="container">
        <span>&copy; {getCopyRightYear()} {profile.name}</span>
      </div>
    </footer>
    <BackToTop />
  </>
  );
};

export default Layout;
