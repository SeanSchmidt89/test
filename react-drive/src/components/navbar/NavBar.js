import React, { useState } from "react";
import styles from "./NavBar.module.css";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="/" />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' '): [styles.menu]}>
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Log In</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "8px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "8px" }} />
          </li>
        </ul>
      </nav>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className={styles.mobile_btn}
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default NavBar;
