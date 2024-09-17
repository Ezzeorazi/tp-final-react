"use client";
import React from 'react';
import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';

const LoginForm = ({values, handleChange, handleSubmit, error }) => {
	
	  
	  return (
		<>
		  <div className={styles.loginForm}>
			<form onSubmit={handleSubmit}>
			  <div className={styles.formGroup}>
				<label htmlFor="email">Email</label>
				<input
				  type="email"
				  id="email"
				  name="email"
				  required
				  value={values.email}
				  autoComplete="current-email"
				  onChange={handleChange}
				/>
			  </div>
			  <div className={styles.formGroup}>
				<label htmlFor="password">Contraseña</label>
				<input
				  type="password"
				  id="password"
				  name="password"
				  required
				  value={values.password}
				  autoComplete="current-password"
				  onChange={handleChange}
				/>
			  </div>
			  <button className={styles.boton} type="submit">
				Enviar
			  </button>
			  <NavLink className={styles.register} to={"/register"}>Registrarse</NavLink>
			</form>
			{error && <div className={styles.error}>{error}</div>}
		  </div>
		</>
	  );
	};


export default LoginForm;