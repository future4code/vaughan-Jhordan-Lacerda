import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectCountry from "../../components/SelectCountry";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hook/useForm";

export default function ApplicationFormPage() {
  const [tripList, setTripList] = useState([]);
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [idViagem, setIdViagem] = useState("");

  useEffect(() => {
    getTrips();
  }, []);

  const goToListTripPage = () => {
    navigate("/trips/list");
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

  const applyToTrip = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/trips/${idViagem}/apply`;

    axios
      .post(url, form)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleId = (e) => {
    setIdViagem(e.target.value)
  }

  const optionTrips = tripList.map((trip) => {
    return (
      <option key={trip.id} value={trip.id}>
        {trip.name}
      </option>
    );
  });

  console.log(idViagem)

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={applyToTrip}>
        <select onChange={handleId}>
          <option value="">Selecione a viagem</option>
          {optionTrips}
        </select>
        <input
          name={"name"}
          placeholder="Nome"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          name={"age"}
          placeholder="Idade"
          value={form.age}
          onChange={onChange}
          type={"number"}
          required
        />
        <input
          name={"applicationText"}
          placeholder="Texto de candidatura"
          value={form.applicationText}
          onChange={onChange}
          required
        />
        <input
          name={"profession"}
          placeholder="Profissão"
          value={form.profession}
          onChange={onChange}
          required
        />
        <SelectCountry
          name={"country"}
          value={form.country}
          onChange={onChange}
          required
        />
        <button>Enviar</button>
        <button onClick={goToListTripPage}>Voltar</button>
      </form>
    </div>
  );
}
