import React from "react";
import { useRegisterForm } from "../../hooks";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const {
    formValues,
    error,
    success,
    handleChange,
    handleSubmit,
    handleRedirect
  } = useRegisterForm();

  return (
    <div className={styles.register}>
      <h1>Registro de Usuario</h1>
      {error && <div className={styles.error}>Error: {error}</div>}
      {success && <div className={styles.success}>Usuario creado satisfactoriamente</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="user">Usuario:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={formValues.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.boton} type="submit">Registrar</button>
          <button className={styles.boton} type="button" onClick={handleRedirect}>Ir a Inicio</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;