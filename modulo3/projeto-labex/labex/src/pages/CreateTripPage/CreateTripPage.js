import axios from "axios";
import react from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hook/useForm";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";

export default function CreateTripPage() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const navigate = useNavigate();

  UseProtectedPage();

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list");
  };

  const createTrip = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const url = `${BASE_URL}/trips`;
    const axiosConfig = { headers: { auth: token } };

    axios
      .post(url, form, axiosConfig)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  
  return (
    <div>
      <h1>Criar Viagem</h1>
      <form onSubmit={createTrip}>
        <input
          placeholder="Nome"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <select name={"planet"} value={form.planet} onChange={onChange}>
          <option value="" disabled="" selected="">
            Escolha um planeta
          </option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
        </select>
        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          type="date"
          required
        />
        <input
          placeholder="Descrição"
          name={"description"}
          value={form.description}
          onChange={onChange}
          required
        />
        <input
          placeholder="Duração em dias"
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          required
          type="number"
        />
        <button>Criar</button>
      </form>

      <button onClick={goToAdminHomePage}>Voltar</button>
    </div>
  );
}
