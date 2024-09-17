"use client";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <div className={styles.notfoundpage}>
      <h1>404</h1>
      <p>Not Found</p>
      <button onClick={handleGoHome} className={styles.homeButton}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;