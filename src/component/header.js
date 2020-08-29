import React from "react";
import '../App.css';
import { motion } from "framer-motion";

const Home = () => {
  const line1 = {
    hidden: {
      opacity: [0, 0.2, 0.4],
      scaleX: [0, 0.1, 0.2],
      y: [-10, 0],
    },

    visible: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      scaleX: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      y: [10, 15, 20, 25, 35, 40],
      transition: {
        y: { delay: 0.5 },
        type: "spring",
      },
    },
  };

  const line2 = {
    hidden: {
      opacity: [0, 0.2, 0.3, 0.4],
      scaleX: [0, 0.1, 0.2],
      y: [10, 8, 5, 3, 0],
    },

    visible: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      scaleX: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      y: [-3, -5, -7, -10, -15, -20, -25, -35, -40],

      transition: {
        y: { delay: 0.5 },
        type: "spring",
      },
    },
  };

  const ampersand = {
    hidden: {
      opacity: 0,
      scaleY: [0, 0.25],
    },

    visible: {
      opacity: [0.5, 0.7, 1],
      scaleY: [0.5, 1],

      transition: {
        duration: 0.4,
        type: "spring",
        delay: 0.75,
      },
    },
  };
  const LETTER1 = {
    hidden: {
      opacity: 0,
      scaleY: [0, 0.25],
      x: 0,
    },

    visible: {
      opacity: [0.5, 0.7, 1],
      scaleY: [0.5, 1],
      x: -10,
      transition: {
        duration: 0.7,
        type: "spring",
        x: { delay: 1.2 },
        delay: 0.75,
      },
    },
  };
  const LETTER2 = {
    hidden: {
      opacity: 0,
      scaleY: [0, 0.25],
      x: 0,
    },

    visible: {
      opacity: [0.5, 0.7, 1],
      scaleY: [0.5, 1],
      x: 10,
      transition: {
        duration: 0.7,
        type: "spring",
        x: { delay: 1.2 },
        delay: 0.75,
      },
    },
  };
  const hoolydevlog = {
    hidden: {
      y: [0, -20, -50, -70],
    },

    visible: {
      y: [-100, -150, -200, -250, -280, -300],
      transition: {
        delay: 2,
        type: "spring",
      },
    },
  };
  const say = {
    hidden: {
      y: "100vh",
    },

    visible: {
      y: 0,
      transition: {
        delay: 2,
        type: "tween",
        duration: 1,
      },
    },
  };
  const myname = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 3,
        type: "spring",
        duration: 2,
      },
    },
  };
  const myname1 = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 3.5,
        type: "spring",
        duration: 2,
      },
    },
  };
  const myname2 = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 4,
        type: "spring",
        duration: 2,
      },
    },
  };
  const myname3 = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 4.2,
        type: "spring",
        duration: 2,
      },
    },
  };
  return (
    <motion.div>
      <motion.div className="overall">
        <motion.div
          className="log"
          variants={hoolydevlog}
          animate="visible"
          initial="hidden"
        >
          <h1 className="ml5">
            <motion.span className="text-wrapper">
              <motion.span
                className="line line1"
                variants={line1}
                animate="visible"
                initial="hidden"
              ></motion.span>
              <motion.span
                variants={LETTER1}
                animate="visible"
                initial="hidden"
                className="letters letters-left"
              >
                Web{" "}
              </motion.span>
              <motion.span
                variants={ampersand}
                animate="visible"
                initial="hidden"
                className="letters ampersand"
              >
                &amp;
              </motion.span>
              <motion.span
                variants={LETTER2}
                animate="visible"
                initial="hidden"
                className="letters letters-right"
              >
                Development
              </motion.span>
              <motion.span
                className="line line2"
                variants={line2}
                animate="visible"
                initial="hidden"
              ></motion.span>
            </motion.span>
          </h1>
        </motion.div>
        <motion.div
          className="say"
          variants={say}
          animate="visible"
          initial="hidden"
        >
          <div className="saydec">
            {" "}
            <h1> Say Hi</h1>
            <motion.h2 variants={myname} animate="visible" initial="hidden">
              I'm abdelrahman abbas web development{" "}
            </motion.h2>
            <motion.p variants={myname1} animate="visible" initial="hidden">
              {" "}
              I love to design and make website ,,,
            </motion.p>
            <motion.p
              variants={myname2}
              animate="visible"
              initial="hidden"
              className="mail"
            >
              <a href>abdabbas456@gmail.com</a>
            </motion.p>
            <motion.p
              variants={myname3}
              animate="visible"
              initial="hidden"
              className="phone"
            >
              call me : 966547022238
            </motion.p>
          </div>
          <div className="sayimg"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Home;
