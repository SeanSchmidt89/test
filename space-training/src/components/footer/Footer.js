import React from "react";
import styles from "./Footer.module.css";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaSearchLocation,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.left}>
        <div className={styles.location}>
          <FaSearchLocation size={20} style={{ marginRight: "2rem" }} />
          <div>
            <p>123 Acme St.</p>
            <h4>Springfield, OR</h4>
          </div>
        </div>
        <div className={styles.phone}>
          <h4>
            <FaPhone size={20} style={{ marginRight: "2rem" }} />
            1-800-123-4567
          </h4>
        </div>
        <div className={styles.email}>
          <h4>
            <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
          </h4>
        </div>
      </div>
      <div className={styles.right}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className={styles.social}>
          <FaFacebook size={20} style={{ marginRight: "2rem" }} />
          <FaTwitter size={20} style={{ marginRight: "2rem" }} />
          <FaLinkedin size={20} style={{ marginRight: "2rem" }} />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
