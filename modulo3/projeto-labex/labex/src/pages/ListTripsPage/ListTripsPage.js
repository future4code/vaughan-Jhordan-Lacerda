import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";

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

    axios.get(url)
      .then((res) => {
        setTripList(res.data.trips);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const listTrip = tripList.map((trip) => {
    return(
      <div key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </div>
    )
  })

  return (
    <div>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Increver-se</button>
      {listTrip}
    </div>
  );
}
