import React from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "../../hooks";
import styles from "./EmployeesPage.module.css";

const EmployeesPage = () => {
  const { employees, loading, error } = useEmployees();

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.employeespage}>
      <h1>Empleados</h1>
      <div className={styles.cardContainer}>
        {employees.map((employee) => (
          <div key={employee.id} className={styles.card}>
            <p className={styles.name}>Nombre:</p> {employee.name} <br />
            <p className={styles.posicion}>Posición:</p> {employee.position}<br />
            <hr />
            <Link className={styles.boton} to={`/empleado/${employee.id}`}>Ver más detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesPage;