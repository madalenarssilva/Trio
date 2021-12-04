import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import { Form } from "react-bootstrap";

const Contact = ({toggleTheme, value, font}) => {
  const animation = useAnimation();

  /*const sequence = async () => {
    await animation.start({
      translateY: 0,
      display: "block",
      rotate: 0,
    });
    await animation.start({
      rotate: 180,
      trasition: {
        delay: 0,
        duration: 1,
      },
    });
  };

  useEffect(() => {
    sequence();
  }, []);*/

  return (
    <>
      <div className="contact-body">
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
            /*initial={{
              translateY: "-50vh",
              display: "none",
            }}
            animate={animation}
            transition={{
              type: "spring",

              delay: 1.5,
            }}*/
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
        >
          <div className="form-div">
            <label style={{color:'white'}}>
              Name
              <input type="text" name="name" style={{color:'white'}}/>
            </label>
            <label style={{color:'white'}}>
              Email
              <input type="text" name="email" style={{color:'white'}}/>
            </label>
            <label style={{color:'white'}}>
              Message
              <textarea type="text" rows="10" name="message" style={{color:'white'}}/>
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
              type="button"
              value="Send"
            />
          </div>
        </motion.form>
      </div>
      <Footer toggleTheme={toggleTheme} value={value}/>
    </>
  );
};

export default Contact;
