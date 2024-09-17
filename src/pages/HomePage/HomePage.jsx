"use client";
import React from "react";
import styles from "./HomePage.module.css";
import { CreateForm } from "../../components";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
            <img src="src/assets/img/edificio-dundler-mifflin.jpg" alt="Edificio Dunder Mifflin" />
      <h1>Crear Empleados</h1>
      <CreateForm />
    </div>
  );
};

export default HomePage;