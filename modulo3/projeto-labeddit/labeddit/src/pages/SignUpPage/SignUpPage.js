import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import useForm from "../../hook/useForm";
import { InputContainer, ScreenContainer } from "./styled";

const SignUpPage = () => {
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <ScreenContainer>
      <InputContainer>
        <form onSubmit={onSubmit}>
          <Stack spacing={3}>
            <FormControl isRequired >
              <InputGroup >
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  placeholder="Nome de Usuário"
                  name={"username"}
                  value={form.username}
                  onChange={onChange}
                  variant="filled"
                />
              </InputGroup>
            </FormControl>

            <Divider />

            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input
                  placeholder="E-mail"
                  name={"email"}
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  variant="filled"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <Input
                  placeholder="Senha"
                  name={"password"}
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  variant="filled"
                />
              </InputGroup>
            </FormControl>

            <Button type="submit" colorScheme="teal" size="sm">
              Cadastrar
            </Button>
          </Stack>
        </form>
      </InputContainer>
    </ScreenContainer>
  );
};

export default SignUpPage;
