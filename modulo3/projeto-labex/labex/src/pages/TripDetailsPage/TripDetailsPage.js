import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";

export default function TripDetailsPage() {
  const [trip, setTrip] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  UseProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list");
  };

  const getTripDetail = () => {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL}/trip/${params.id}`;
    const axiosConfig = { headers: { auth: token } };

    axios
      .get(url, axiosConfig)
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <h1>{trip.name}</h1>
      <p>Nome: {trip.name}</p>
      <p>Descrição: {trip.description}</p>
      <p>Planeta: {trip.planet}</p>
      <p>Duração: {trip.durationInDays}</p>
      <p>Data: {trip.date}</p>

      <button onClick={goToAdminHomePage}>Voltar</button>

      <h2>Candidatos Pendentes</h2>
      <p>card com as informações do candidato</p>
      <button>Aprovar</button>
      <button>Reprovar</button>

      <h2>Candidatos Aprovados</h2>
      <ul>
        <li>Nome dos candidatos aprovados</li>
      </ul>
    </div>
  );
}
