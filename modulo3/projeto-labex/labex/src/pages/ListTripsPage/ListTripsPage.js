import react from "react";
import { useNavigate } from "react-router-dom";

export default function ListTripPages() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToApplicationFormPage = () => {
      navigate("/trips/application")
  }

  return (
    <div>
      <p>ListTripPages</p>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Increver-se</button>
    </div>
  );
}
