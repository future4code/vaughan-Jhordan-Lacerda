import react from "react";
import { useNavigate } from "react-router-dom";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";

export default function CreateTripPage() {
  const navigate = useNavigate();

  UseProtectedPage();

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list");
  };

  return (
    <div>
      <h1>Criar Viagem</h1>
      <input placeholder="Nome" />
      <select>
        <option value="" disabled="" selected="">
          Escolha um planeta
        </option>
      </select>
      <input type="date" />
      <input placeholder="Descrição" />
      <input placeholder="Duração em dias" type="number" />

      <button onClick={goToAdminHomePage}>Voltar</button>
      <button>Criar</button>
    </div>
  );
}
