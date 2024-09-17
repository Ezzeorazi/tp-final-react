import React from "react";
import { useCreateForm } from "../../hooks";
import styles from "./CreateForm.module.css";

const CreateForm = () => {
  const {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit
  } = useCreateForm();

  return (
    <form className={styles.createForm} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>Error: {error}</div>}
      {success && <div className={styles.success}>Empleado creado satisfactoriamente</div>}
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
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
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="position">Posición:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>
      <button className={styles.boton} type="submit" disabled={loading}>
        {loading ? "Creando..." : "Crear Empleado"}
      </button>
    </form>
  );
};

export default CreateForm;