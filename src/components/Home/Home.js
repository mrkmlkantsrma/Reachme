import React from 'react';
import "./Home.css";
import "./HomeMobile.css";
import { motion } from "framer-motion";
import 'font-awesome/css/font-awesome.min.css';
import Header from '../Header/Header';

const parentList = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "-10%",
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -25 },
};

const Home = () => {

  return (
    
    <motion.div
      variants={parentList}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="reachmeBlock"
    >
      <div className="contentAndLinks">
        <p>
      <Header />
     
         
        <div className="middle">
          <motion.a
            variants={item}
            className="socialTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mrkmlkantsrma"
          >
           <i className="fa fa-github"></i>
 
          <label> Github</label>
          </motion.a>
          <motion.a
            variants={item}
            className="socialTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kamal-kant-sharma-6a4907162/"
          >
            <i className="fa fa-linkedin"></i>
            <label> Linkedin</label>
          </motion.a>
          <motion.a
            variants={item}
            className="socialTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ii_kamalkant_ii/"
          >
            <i className="fa fa-instagram"></i>
            <label> Instagram</label>
          </motion.a>
          <motion.a
            variants={item}
            className="socialTile"
            transition={{ ease: "easeIn" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://mrkmlkantsrma.github.io/Profile"
          >
            <i className="fa fa-user"></i>
            <label> Profile</label>
          </motion.a>
        </div>
        Reach me Out on <br />
        Email : Kmlkantsrma@Gmail.com <br />
        Mob : +91 78072-40936
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
