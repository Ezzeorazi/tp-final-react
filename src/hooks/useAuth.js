import { useState, useEffect, useCallback } from "react";
import CryptoJS from "crypto-js";


const useAuth = () => {
  const [isLogged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const secretKey = "mySecretKey"; // Clave secreta para encriptar y desencriptar el token

  useEffect(() => {
    const encryptedToken = localStorage.getItem("token");
    if (encryptedToken) {
      const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
      const token = bytes.toString(CryptoJS.enc.Utf8);
      if (token) {
        setLogged(true);
      }
    }
    setLoading(false);
  }, []);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onLogin = useCallback(async () => {
    setLoading(true);
    try {
      await sleep(1000);
      const fakeToken = "123123";
      const encryptedToken = CryptoJS.AES.encrypt(fakeToken, secretKey).toString();
      localStorage.setItem("token", encryptedToken);
      setLogged(true);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const onLogout = useCallback(() => {
    try {
      localStorage.removeItem("token");
      setLogged(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, []);

  return { isLogged, loading, onLogin, onLogout };
};

export default useAuth;