"use client";
import React from "react";
import styles from "./LoginPage.module.css";
import LoginContainer from "../../containers/LoginContainer";

const LoginPage = ({ onLogin }) => {


  return (
    <>
    <div className={styles.loginPage}>
    <LoginContainer onLogin={onLogin}/>
    
    </div>
     
    </>
  );
};

export default LoginPage;
