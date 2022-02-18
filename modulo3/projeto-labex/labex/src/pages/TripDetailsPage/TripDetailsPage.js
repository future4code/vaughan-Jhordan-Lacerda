import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";

export default function TripDetailsPage() {
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  UseProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, [candidates]);

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
        setCandidates(res.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const decideCandidate = (condition, id) => {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL}/trips/${params.id}/candidates/${id}/decide`;
    const axiosConfig = { headers: { auth: token } };

    if (condition) {
      const body = {
        approve: true,
      };

      axios
        .put(url, body, axiosConfig)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      const body = {
        approve: false,
      };

      axios
        .put(url, body, axiosConfig)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const listCandidates = candidates.map((candidate) => {
    return (
      <div key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>Profissão: {candidate.profession}</p>
        <p>Idade: {candidate.age}</p>
        <p>País: {candidate.country}</p>
        <p>Texto de Candidatura: {candidate.applicationText}</p>
        <div>
          <button onClick={() => decideCandidate(true, candidate.id)}>
            Aprovar
          </button>
          <button onClick={() => decideCandidate(false, candidate.id)}>
            Reprovar
          </button>
        </div>
      </div>
    );
  });

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
      {listCandidates}

      <h2>Candidatos Aprovados</h2>
      <ul>
        <li>Nome dos candidatos aprovados</li>
      </ul>
    </div>
  );
}
