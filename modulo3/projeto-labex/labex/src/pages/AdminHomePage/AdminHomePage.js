import react from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create");
  };

  const goToTripDetailsPage = () => {
      navigate("/admin/trips/:id")
  }

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button>Logout</button>
      <p onClick={goToTripDetailsPage}>Lista de Viagens</p>
    </div>
  );
}
