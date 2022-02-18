import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";

export default function TripDetailsPage() {
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([])
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
        setCandidates(res.data.trip.candidates)
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  console.log(candidates)

  const decideCandidate = () => {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL}/trip/${params.id}/candidates/:candidateId/decide`
    const axiosConfig = { headers: { auth: token } };
  }

  const listCandidates = candidates.map((candidate) => {
    return <li key={candidate.id}>{candidate.name}</li>
  })

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
      <ul>{listCandidates}</ul>

      <button>Aprovar</button>
      <button>Reprovar</button>

      <h2>Candidatos Aprovados</h2>
      <ul>
        <li>Nome dos candidatos aprovados</li>
      </ul>
    </div>
  );
}
