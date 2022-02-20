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
        alert("Formulário de inscrição enviado com sucesso!");
      })
      .catch((err) => {
        alert(err.response.data.message);
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

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={applyToTrip}>
        <select onChange={handleId} required>
          <option value="">Selecione a viagem</option>
          {optionTrips}
        </select>
        <input
          name={"name"}
          placeholder="Nome"
          value={form.name}
          onChange={onChange}
          pattern={"^.{3,}"}
          title="Você deve inserir, no mínimo 3 letras"
          required
        />
        <input
          name={"age"}
          placeholder="Idade"
          value={form.age}
          onChange={onChange}
          type={"number"}
          min="18"
          required
        />
        <input
          name={"applicationText"}
          placeholder="Texto de candidatura"
          value={form.applicationText}
          onChange={onChange}
          pattern={"^.{30,}"}
          title="Você deve inserir, no mínimo 30 letras"
          required
        />
        <input
          name={"profession"}
          placeholder="Profissão"
          value={form.profession}
          onChange={onChange}
          pattern={"^.{10,}"}
          title="Você deve inserir, no mínimo 10 letras"
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
