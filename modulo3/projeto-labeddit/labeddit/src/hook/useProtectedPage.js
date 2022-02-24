import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/cordinator";

export const UseProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null || token === "") { 
      goToLogin(navigate)
    }
  }, [navigate]);
};