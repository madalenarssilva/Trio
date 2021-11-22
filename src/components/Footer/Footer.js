import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: "10vh", overflowX: "hidden" },
      }}
      className="footer"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, translateX: 0 },
          hidden: { opacity: 0, translateX: "-10vw" },
        }}
        className="links"
      >
        <nav className="footer-nav">
          <Link
            to="/projects"
            onMouseOver={(e) => e.target.classList.add("color-animation")}
            onMouseLeave={(e) => e.target.classList.remove("color-animation")}
          >
            Projects
          </Link>
          <Link
            to="/about"
            onMouseOver={(e) => e.target.classList.add("color-animation")}
            onMouseLeave={(e) => e.target.classList.remove("color-animation")}
          >
            About
          </Link>
          <Link
            to="/contact"
            onMouseOver={(e) => e.target.classList.add("color-animation")}
            onMouseLeave={(e) => e.target.classList.remove("color-animation")}
          >
            Contact
          </Link>
        </nav>
        <div className="light-mode">
          <img className="light-icon" src="/light.png" alt="logo-luz" />
          <p
            onMouseOver={(e) => e.target.classList.add("color-animation")}
            onMouseLeave={(e) => e.target.classList.remove("color-animation")}
          >
            Light mode
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1.2 }}
        variants={{
          visible: { opacity: 1, translateX: 0 },
          hidden: { opacity: 0, translateX: "5vw" },
        }}
        className="social-media"
      >
        <img src="/facebook-icon.svg" width="18px" />
        <img src="/instagram-icon.svg" width="90px" />
      </motion.div>
    </motion.div>
  );
};

export default Footer;
