import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.link}>GXL TRVL</h1>
      </Link>
      <ul
        className={
          nav ? [styles.navMenu, styles.active].join(" ") : [styles.navMenu]
        }
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/Training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div
        className={styles.hamburger}
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
};

export default NavBar;
