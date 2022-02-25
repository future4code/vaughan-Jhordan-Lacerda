import { Button, ChakraProvider, Input, Select, Stack } from "@chakra-ui/react";
import axios from "axios";
import react from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hook/useForm";
import { UseProtectedPage } from "../../Hook/UseProtectedPage";
import { BigH1, DivContainer, FormColumn, SpaceButtons } from "./styled";

export default function CreateTripPage() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const navigate = useNavigate();

  UseProtectedPage();

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list");
  };

  const createTrip = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const url = `${BASE_URL}/trips`;
    const axiosConfig = { headers: { auth: token } };

    axios
      .post(url, form, axiosConfig)
      .then((res) => {
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <DivContainer>
      <ChakraProvider>
        <BigH1>Criar Viagem</BigH1>
        <FormColumn onSubmit={createTrip}>
          <Stack spacing={5}>
            <Input
              placeholder="Nome"
              name={"name"}
              value={form.name}
              onChange={onChange}
              pattern={"^.{5,}"}
              title="Você deve inserir, no mínimo 5 letras"
              required
            />
            <Select
              name={"planet"}
              value={form.planet}
              onChange={onChange}
              required
            >
              <option defaultValue="" disabled="">
                Escolha um planeta
              </option>
              <option value="Mercúrio">Mercúrio</option>
              <option value="Vênus">Vênus</option>
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
              <option value="Júpiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
            </Select>
            <Input
              name={"date"}
              value={form.date}
              onChange={onChange}
              type="date"
              required
            />
            <Input
              placeholder="Descrição"
              name={"description"}
              value={form.description}
              onChange={onChange}
              pattern={"^.{30,}"}
              title="Você deve inserir, no mínimo 30 letras"
              required
            />
            <Input
              placeholder="Duração em dias"
              name={"durationInDays"}
              value={form.durationInDays}
              onChange={onChange}
              min="50"
              title="Você deve inserir, no mínimo 5 letras"
              required
              type="number"
            />
          </Stack>
          <SpaceButtons>
          <Button colorScheme="teal">Criar</Button>
          <Button colorScheme="teal" onClick={goToAdminHomePage}>
            Voltar
          </Button>
          </SpaceButtons>
          
        </FormColumn>
      </ChakraProvider>
    </DivContainer>
  );
}
