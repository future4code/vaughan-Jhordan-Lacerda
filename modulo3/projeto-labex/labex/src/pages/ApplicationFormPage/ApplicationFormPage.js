import axios from "axios";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectCountry from "../../components/SelectCountry";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hook/useForm";
import {
  BigH1,
  DivContainer,
  FormColumn,
  InputResized,
  SelectResized,
  SpaceButtons,
} from "./styled";
import { ChakraProvider, Button, Select, Input, Stack } from "@chakra-ui/react";

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
    setIdViagem(e.target.value);
  };

  const optionTrips = tripList.map((trip) => {
    return (
      <option key={trip.id} value={trip.id}>
        {trip.name}
      </option>
    );
  });

  return (
    <DivContainer>
      <ChakraProvider>
        <BigH1>Inscreva-se para uma viagem</BigH1>

        <FormColumn onSubmit={applyToTrip}>
          <Stack spacing={6}>
            <Select
              bg="lightgray"
              borderColor="lightgrey"
              size="md"
              onChange={handleId}
              required
              isRequired={"true"}
            >
              <option value="">Selecione a viagem</option>
              {optionTrips}
            </Select>

            <Input
              name={"name"}
              placeholder="Nome"
              value={form.name}
              onChange={onChange}
              pattern={"^.{3,}"}
              title="Você deve inserir, no mínimo 3 letras"
              required
            />
            <Input
              name={"age"}
              placeholder="Idade"
              value={form.age}
              onChange={onChange}
              type={"number"}
              min="18"
              required
            />
            <Input
              name={"applicationText"}
              placeholder="Texto de candidatura"
              value={form.applicationText}
              onChange={onChange}
              pattern={"^.{30,}"}
              title="Você deve inserir, no mínimo 30 letras"
              required
            />
            <Input
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
          </Stack>
          <SpaceButtons>
            <Button colorScheme="teal">
              Enviar
            </Button>
            <Button colorScheme="teal" onClick={goToListTripPage}>
              Voltar
            </Button>
          </SpaceButtons>
        </FormColumn>
      </ChakraProvider>
    </DivContainer>
  );
}
