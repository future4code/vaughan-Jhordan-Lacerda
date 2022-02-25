import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BigH1, CenterDiv } from "../ListTripsPage/styled";
import { SpaceButtons } from "../HomePage/styled";
import {CardTrip} from "../../components/CardTrip/CardTrip"

export default function ListTripPages() {
  const [tripList, setTripList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrips();
  }, []);

  const goToHomePage = () => {
    navigate("/");
  };

  const goToApplicationFormPage = () => {
    navigate("/trips/application");
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

  const listTrip = tripList.map((trip) => {
    return (
      <CardTrip key={trip.id}
        name = {trip.name}
        description = {trip.description}
        planet = {trip.planet}
        durationInDays = {trip.durationInDays}
        date = {trip.date}
      >
      </CardTrip>
    );
  });

  return (
    <ChakraProvider>
      <CenterDiv>
        <SpaceButtons>
        <Button colorScheme="teal" onClick={goToHomePage}>
          Voltar
        </Button>
        <Button colorScheme="teal" onClick={goToApplicationFormPage}>
          Increver-se
        </Button>
        </SpaceButtons>
        
        <BigH1>Lista de viagens</BigH1>
        {listTrip}
      </CenterDiv>
    </ChakraProvider>
  );
}
