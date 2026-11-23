import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navItems, profile } from "../data/content";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "dark");
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = "";
      if (atBottom) {
        current = navItems[navItems.length - 1][0];
      } else {
        for (const [id] of navItems) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 140) current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true"></div>
      <div className="container header-inner">
        <Link to="home" smooth duration={500} href="#home" className="brand" onClick={close} aria-label={`${profile.name} - home`}>
          <span className="brand-mark">GC</span>
          <span className="brand-name">{profile.name}</span>
        </Link>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {navItems.map(([id, label]) => (
            <Link key={id} to={id} href={`#${id}`} smooth duration={500} offset={-72}
              className={`nav-link ${active === id ? "active" : ""}`} onClick={close}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="icon-btn" aria-label="Toggle light or dark theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <i className={`fa ${theme === "dark" ? "fa-sun-o" : "fa-moon-o"}`} aria-hidden="true"></i>
          </button>
          <button type="button" className="icon-btn menu-btn" aria-label="Toggle menu" aria-expanded={open}
            onClick={() => setOpen(!open)}>
            <i className={`fa ${open ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
