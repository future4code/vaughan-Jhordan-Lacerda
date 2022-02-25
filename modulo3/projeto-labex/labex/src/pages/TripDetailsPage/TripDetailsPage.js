import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";
import { BigH1, BigH2, CardCandidate, CardCandidateApproved, DivContainer, SpaceButtons } from "./styled";
import { ChakraProvider, Button, Stack } from "@chakra-ui/react";

export default function TripDetailsPage() {
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approvedCandidates, setApprovedCandidate] = useState([]);
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
        setApprovedCandidate(res.data.trip.approved);
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
          alert(res.data.message);
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
      <CardCandidate key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>Profissão: {candidate.profession}</p>
        <p>Idade: {candidate.age}</p>
        <p>País: {candidate.country}</p>
        <p>Texto de Candidatura: {candidate.applicationText}</p>
        <SpaceButtons>
          <Button
            colorScheme="teal"
            onClick={() => decideCandidate(true, candidate.id)}
          >
            Aprovar
          </Button>
          <Button
            colorScheme="teal"
            onClick={() => decideCandidate(false, candidate.id)}
          >
            Reprovar
          </Button>
        </SpaceButtons>
      </CardCandidate>
    );
  });

  const approvedCandidate = approvedCandidates.map((candidate) => {
    return <li key={candidate.id}>{candidate.name}</li>;
  });

  return (
    <DivContainer>
      <ChakraProvider>
        <BigH1>{trip.name}</BigH1>
        <div>
          <p>Nome: {trip.name}</p>
          <p>Descrição: {trip.description}</p>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays}</p>
          <p>Data: {trip.date}</p>
        </div>
        <div>
          <Button colorScheme="teal" onClick={goToAdminHomePage}>
            Voltar
          </Button>
        </div>

        <BigH2>Candidatos Pendentes</BigH2>
        {listCandidates}
        <BigH2>Candidatos Aprovados</BigH2>
        <CardCandidateApproved>
        <ul>{approvedCandidate}</ul>
        </CardCandidateApproved>
        
      </ChakraProvider>
    </DivContainer>
  );
}
