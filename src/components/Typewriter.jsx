import { useEffect, useState } from "react";

const Typewriter = ({ words }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let word = 0;
    let chars = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = words[word % words.length];
      chars += deleting ? -1 : 1;
      setText(current.slice(0, chars));

      let delay = deleting ? 35 : 80;
      if (!deleting && chars === current.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && chars === 0) {
        deleting = false;
        word++;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return <span className="typed" aria-label={words.join(", ")}>{text}</span>;
};

export default Typewriter;
