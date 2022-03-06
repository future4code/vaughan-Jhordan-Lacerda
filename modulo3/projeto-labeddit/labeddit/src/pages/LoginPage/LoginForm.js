import React from "react";
import {
  Input,
  Button,
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import useForm from "../../hook/useForm";
import { InputContainer } from "./styled";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, navigate);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <Stack spacing={3}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<EmailIcon />} />
              <Input
                placeholder="E-mail"
                name={"email"}
                id="email"
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
                id="password"
                type="password"
                value={form.password}
                onChange={onChange}
                variant="filled"
              />
            </InputGroup>
          </FormControl>

          <Button type="submit" colorScheme="teal" size="sm">
            Enviar
          </Button>
        </Stack>
      </form>
    </InputContainer>
  );
};

export default LoginForm;
