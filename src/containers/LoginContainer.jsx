import React, { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import LoginForm from "../components/LoginForm/LoginForm";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import styles from "../components/LoginForm/LoginForm.module.css";
import { useDispatch } from "react-redux";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
  });

  const { loading, isLogged, onLogin } = useAuth();

  const [error, setError] = useState("");

 

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === values.email && user.password === values.password
      );
      if (user) {
        await onLogin(values);
      } else {
        setError("Email o contraseña incorrectos");
      }
    } catch (err) {
      console.error("Error during login:", err); // Log para verificar errores
      setError("Login failed");
    }
  };


  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <LoginForm
      values={values}
      handleChange={handleChange}
      handleSubmit={submitForm}
      loading={loading}
      error={error}
    />
  );
};

export default LoginContainer;
