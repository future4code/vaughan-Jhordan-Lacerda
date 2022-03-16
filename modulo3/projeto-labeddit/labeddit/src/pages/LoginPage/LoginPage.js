import React from "react";
import { Button, Divider } from "@chakra-ui/react";

import { ScreenContainer, SignUpButtonContainer } from "./styled";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToRegister } from "../../routes/cordinator";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LoginForm />
      <Button
        colorScheme="teal"
        size="sm"
        variant="ghost"
        onClick={() => goToRegister(navigate)}
      >
        Não possui conta? Cadastre-se
      </Button>
    </ScreenContainer>
  );
};

export default LoginPage;
