import { useEffect, useRef, useState } from "react";
import { readRssFeed } from "./utilities/ReadRssFeed";
import { profile } from "../data/content";

const CountUp = ({ to, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1200;
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return <span className="stat-span-font-size" ref={ref}>{value}{suffix}</span>;
};

const Stats = () => {
  const [articles, setArticles] = useState(29);

  useEffect(() => {
    readRssFeed(profile.rssUrl).then((count) => {
      if (count) setArticles(count);
    });
  }, []);

  const years = new Date().getFullYear() - profile.careerStartYear;
  const roundedArticles = articles - (articles % 5);

  const stats = [
    { to: years, suffix: "+", label: "Years of experience" },
    { to: roundedArticles, suffix: "+", label: "Technical articles" },
    { to: 18, suffix: "k+", label: "Extension installs" },
    { to: 3, suffix: "x", label: "C# Corner MVP" },
  ];

  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <strong><CountUp to={s.to} suffix={s.suffix} /></strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
