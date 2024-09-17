"use client";
import React from "react";
import styles from "./PublicLayout.module.css";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className={styles.publiclayout}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Dundler Mifflin</div>
      </nav>
      <main><Outlet/></main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Ezequiel Orazi</p>
      </footer>
    </div>
    
  );
};

export default PublicLayout;
