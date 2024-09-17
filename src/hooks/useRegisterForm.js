import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegisterForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    user: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Obtener la lista de usuarios existentes
      const usersResponse = await fetch("http://localhost:3000/users");

      if (!usersResponse.ok) {
        throw new Error("Failed to fetch users");
      }

      const users = await usersResponse.json();

      // Verificar si el email ya existe
      const emailExists = users.some(user => user.email === formValues.email);
      if (emailExists) {
        setError("El email ya está registrado");
        return;
      }

      // Obtener el siguiente ID disponible
      const existingIds = users.map(user => parseInt(user.id));
      let newId = 1;
      while (existingIds.includes(newId)) {
        newId++;
      }

      // Crear el nuevo usuario con el siguiente ID
      const newUser = { id: newId.toString(), ...formValues };

      // Enviar los datos del formulario con el nuevo ID al servidor
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  const handleRedirect = () => {
    navigate("/");
  };

  return {
    formValues,
    error,
    success,
    handleChange,
    handleSubmit,
    handleRedirect
  };
};

export default useRegisterForm;