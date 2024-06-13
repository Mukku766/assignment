"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          eCommerce
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLinks}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/shop" className={styles.navLinks}>
              Shop
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLinks}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLinks}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
