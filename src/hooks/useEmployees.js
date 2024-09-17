import { useState, useEffect } from "react";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/employees");

        if (!response.ok) {
          throw new Error("Fetch failed");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return {
    employees,
    loading,
    error
  };
};

export default useEmployees;