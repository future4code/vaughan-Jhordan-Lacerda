import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hook/useForm";
import { BigH1, DivContainer, SpaceButtons } from "./styled";
import { Button, ChakraProvider, Input, Stack } from "@chakra-ui/react";
import { FormColumn } from "../ApplicationFormPage/styled";

export default function LoginPage() {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/login`;

    axios
      .post(url, form)
      .then((res) => {
        alert("Login realizado com sucesso");
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  return (
    <DivContainer>
      <ChakraProvider>
        <BigH1>Login</BigH1>
        <FormColumn onSubmit={onSubmitLogin}>
          <Stack spacing={2}>
            <Input
              name={"email"}
              placeholder="E-mail"
              value={form.email}
              onChange={onChange}
              required
              type={"email"}
            />
            <Input
              name={"password"}
              placeholder="Senha"
              type={"password"}
              value={form.password}
              onChange={onChange}
              required
            />
          </Stack>

          <SpaceButtons>
            <Button colorScheme="teal" onClick={goBack}>
              Voltar
            </Button>
            <Button colorScheme="teal" onClick={onSubmitLogin}>
              Entrar
            </Button>
          </SpaceButtons>
        </FormColumn>
      </ChakraProvider>
    </DivContainer>
  );
}
