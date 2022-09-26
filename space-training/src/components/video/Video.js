import React from "react";
import { Link } from "react-router-dom";
import styles from "./Video.module.css";
import spaceVideo from "../../images/milkyway.mp4";

const Video = () => {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted className={styles.video}>
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1>Galaxy. Travel.</h1>
        <p>World's first civilain space travel.</p>
        <div>
          <Link to="/training" className={styles.btn}>
            Training
          </Link>
          <Link to="/contact" className={styles.btnLight}>
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
