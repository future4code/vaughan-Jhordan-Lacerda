import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";
import { DivContainer, SpaceButtons } from "../ApplicationFormPage/styled";
import { ChakraProvider, Button, Stack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BigH1, CardTrip } from "./styled";

export default function AdminHomePage() {
  const navigate = useNavigate();
  const [tripList, setTripList] = useState([]);

  UseProtectedPage();

  useEffect(() => {
    getTrips();
  }, [tripList]);

  const goToHomePage = () => {
    navigate("/");
  };

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create");
  };

  const goToTripDetailsPage = (id) => {
    navigate(`/admin/trips/${id}`);
  };

  const getTrips = () => {
    const url = `${BASE_URL}/trips`;

    axios
      .get(url)
      .then((res) => {
        setTripList(res.data.trips);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");
    const url = `${BASE_URL}/trips/${id}`;
    const axiosConfig = { headers: { auth: token } };

    axios
      .delete(url, axiosConfig)
      .then((res) => alert("Viagem excluída com sucesso"))
      .catch((err) => console.log(err.response));
  };

  const listTrip = tripList.map((trip) => {
    return (
      <CardTrip key={trip.id} onClick={() => goToTripDetailsPage(trip.id)}>
        {trip.name}
        <div>
          <Button
            colorScheme="teal"
            leftIcon={<DeleteIcon boxSize={"2em"} />}
            onClick={() => deleteTrip(trip.id)}
          ></Button>
        </div>
      </CardTrip>
    );
  });

  const logout = () => {
    localStorage.setItem("token", "");
    window.location.reload();
  };

  return (
    <DivContainer>
      <ChakraProvider>
        <BigH1>Painel Administrativo</BigH1>
        <SpaceButtons>
          <Button colorScheme="teal" onClick={goToHomePage}>
            Voltar
          </Button>
          <Button colorScheme="teal" onClick={goToCreateTripPage}>
            Criar Viagem
          </Button>
          <Button colorScheme="teal" onClick={logout}>
            Logout
          </Button>
        </SpaceButtons>
      </ChakraProvider>
      <div>{listTrip}</div>
    </DivContainer>
  );
}
