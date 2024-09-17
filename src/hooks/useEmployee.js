import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useEmployee = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    position: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:3000/employees/${id}`);
        if (!response.ok) {
          throw new Error("Fetch failed");
        }
        const data = await response.json();
        setEmployee(data);
        setFormValues(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const response = await fetch(`http://localhost:3000/employees/${id}`, {
          method: "DELETE"
        });

        if (!response.ok) {
          throw new Error("Delete failed");
        }

        navigate("/empleados");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleBack = () => {
    navigate("/empleados");
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      setEditMode(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
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
  };
};

export default useEmployee;