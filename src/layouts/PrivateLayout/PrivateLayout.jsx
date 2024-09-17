"use client";
import React, { useState } from "react";
import styles from "./PrivateLayout.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const PrivateLayout = () => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onLogout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.privatelayout}>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logo}>Dundler Mifflin</div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            &#9776;
          </div>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
            <li>
              <NavLink to="/home" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/empleados" onClick={closeMenu}>Empleados</NavLink>
            </li>
            <li>
              <button
                className={styles.boton}
                type="button"
                onClick={() => {
                  handleClick();
                  closeMenu();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main><Outlet/></main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Ezequiel Orazi</p>
      </footer>
    </div>
  );
};

export default PrivateLayout;
