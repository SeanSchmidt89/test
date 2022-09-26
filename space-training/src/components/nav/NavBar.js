import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const [nav, setNav] = useState(true)
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.link}>GXL TRVL</h1>
      </Link>
      <ul className={styles.navMenu}>
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
      <div className={styles.hamburger} onClick={() => {setNav(!nav)}}>
      {nav ? <AiOutlineMenu size={25} />  : <AiOutlineClose size={25}/>}
      </div>
    </div>
  );
};

export default NavBar;
