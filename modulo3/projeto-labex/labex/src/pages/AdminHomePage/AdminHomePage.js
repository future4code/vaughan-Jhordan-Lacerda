import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";

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
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

  const listTrip = tripList.map((trip) => {
    return (
      <div key={trip.id}>
        <div onClick={() => goToTripDetailsPage(trip.id)}>{trip.name}</div>

        <div>
          <button onClick={() => deleteTrip(trip.id)}>X</button>
        </div>
      </div>
    );
  });

  const logout = () => {
    localStorage.setItem("token", "");
    window.location.reload()
  }

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
      <div>{listTrip}</div>
    </div>
  );
}
