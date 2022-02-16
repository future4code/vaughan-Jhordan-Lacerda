import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";

export default function AdminHomePage() {
  const navigate = useNavigate();
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const goToHomePage = () => {
    navigate("/");
  };

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create");
  };

  const goToTripDetailsPage = () => {
    navigate("/admin/trips/:id");
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
    return <p key={trip.id} onClick={goToTripDetailsPage}>{trip.name}</p>;
  });

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button>Logout</button>
      <div>{listTrip}</div>
    </div>
  );
}
