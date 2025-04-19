import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <Link className={styles.navbarBrand} to="/">
          <img 
            src="/vite.svg" 
            alt="Logo" 
            className={styles.logo}
          />
          CRM Portfolio
        </Link>

        {/* Hamburger button for mobile */}
        <button 
          className={styles.navbarToggler}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.navbarTogglerIcon}></span>
        </button>

        {/* Navigation items */}
        <ul className={`${styles.navbarNav} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/about">About me</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/projects">Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/posts">Posts</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={`${styles.navLink} ${styles.adminLogin}`} to="/admin-login">
              Admin Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;