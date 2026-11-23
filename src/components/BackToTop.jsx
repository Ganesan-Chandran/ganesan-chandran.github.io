import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button type="button" aria-label="Back to top" className={`back-to-top ${visible ? "show" : ""}`}
      onClick={() => animateScroll.scrollToTop({ duration: 500 })}>
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
};

export default BackToTop;
