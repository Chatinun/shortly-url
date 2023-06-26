import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setIsNavOpen(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles["nav-bar"]}>
          <img src="images/logo.svg" alt="" />
          <nav className={isNavOpen ? styles.active : styles.inactive}>
            <div className={styles["nav-links"]}>
              <Link to="/">Features</Link>
              <Link to="/">Pricing</Link>
              <Link to="/">Resources</Link>
            </div>
            <div className={styles["nav-auth"]}>
              <a href="">Login</a>
              <button id={styles.signup}>Sign up</button>
            </div>
          </nav>
        </div>
        <div className={styles["mobile-nav"]}>
          <button className={isNavOpen ? "" : styles.active}>
            <FaBars onClick={toggleNav} />
          </button>
          <button className={isNavOpen ? styles.active : ""}>
            <FaTimes onClick={toggleNav} />
          </button>
        </div>
      </div>
    </header>
  );
};
