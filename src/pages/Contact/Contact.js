import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

const Contact = ({ toggleTheme, value, font }) => {
  const animation = useAnimation();
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setname("");
    setmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact-body">
        <p className="quote-coffee" style={{ zIndex: "1000" }}>
          hope you liked our portfolio! :)
        </p>
        <img
          className="azul"
          style={{ opacity: 0 }}
          onMouseOver={() =>
            document.getElementById("cursor-blob").classList.add("dot-scale")
          }
          onMouseLeave={() =>
            document.getElementById("cursor-blob").classList.remove("dot-scale")
          }
          src="/Mancha azul.svg"
        />
        <motion.div
          initial={{
            translateX: "-50vw",
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "spring",
            damping: 15,
            duration: 2,
          }}
          className="question"
        >
          <div>
            <p className="first">Got a</p>
            <p className="second">question</p>
          </div>
          <motion.div
            initial={{
              translateY: "-50vh",
              display: "none",
            }}
            animate={{
              translateY: "0",
              display: "block",
              rotate: 180,
            }}
            transition={{
              type: "spring",
              duration: 1,

              delay: 0.5,
            }}
          >
            <p
              className="third"
              onMouseOver={(e) => e.target.classList.add("color-animation")}
              onMouseLeave={(e) => e.target.classList.remove("color-animation")}
            >
              ?
            </p>
          </motion.div>
        </motion.div>
        <motion.form
          initial={{
            translateX: "50vw",
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "spring",
            damping: 15,
            duration: 1,
          }}
          id="form"
        >
          <div className="form-div">
            <label style={{ color: "white" }}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                style={{ color: "white" }}
              />
            </label>
            <label style={{ color: "white" }}>
              Email
              <input
                type="text"
                name="email"
                value={mail}
                onChange={(e) => setmail(e.target.value)}
                style={{ color: "white" }}
              />
            </label>
            <label style={{ color: "white" }}>
              Message
              <textarea
                type="text"
                rows="10"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ color: "white" }}
              />
            </label>
            <input
              className="button"
              onMouseOver={(e) => {
                e.target.classList.add("color-animation-button");
                e.target.classList.add("box-shadow");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("color-animation-button");
                e.target.classList.remove("box-shadow");
              }}
              onClick={handleClick}
              type="button"
              value="Send"
            />
          </div>
        </motion.form>
      </div>
      <Footer toggleTheme={toggleTheme} value={value} />
    </>
  );
};

export default Contact;
