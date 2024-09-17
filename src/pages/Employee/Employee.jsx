import React from "react";
import { useEmployee } from "../../hooks";
import styles from "./Employee.module.css";

const Employee = () => {
  const {
    employee,
    loading,
    error,
    editMode,
    formValues,
    handleDelete,
    handleBack,
    handleEdit,
    handleChange,
    handleSubmit,
    setEditMode
  } = useEmployee();

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.employee}>
      <h1>Detalles del empleado</h1>
      {employee && (
        <div className={styles.card}>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
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
                <label htmlFor="phone">Telefono:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
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
                  value={formValues.address}
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
                  value={formValues.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className={styles.editButton} type="submit">Guardar Cambios</button>
              <button className={styles.editButton} type="button" onClick={() => setEditMode(false)}>
                Cancelar
              </button>
            </form>
          ) : (
            <>
              <strong>Nombre:</strong> {employee.name} <br />
              <strong>Email:</strong> {employee.email} <br />
              <strong>Telefono:</strong> {employee.phone} <br />
              <strong>Dirección:</strong> {employee.address} <br />
              <strong>Posición:</strong> {employee.position} <br />
              <div className={styles.buttonContainer}>
                <button className={styles.editButton} onClick={handleEdit}>
                  Editar Empleado
                </button>
                <button className={styles.deleteButton} onClick={handleDelete}>
                  Eliminar Empleado
                </button>
                <button className={styles.backButton} onClick={handleBack}>
                  Volver a Empleados
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Employee;