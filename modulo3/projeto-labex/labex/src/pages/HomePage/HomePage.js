import react from "react";
import { useNavigate } from "react-router-dom";
import { CenterDiv, SpaceButtons, H1Resized } from "./styled";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function HomePage() {
  const navigate = useNavigate();

  const goToListTripPage = () => {
    navigate("/trips/list");
  };

  const goToAdminPage = () => {
    navigate("/admin/trips/list");
  };

  return (
    <ChakraProvider>
      <CenterDiv>
        <H1Resized>LabeX</H1Resized>
        <SpaceButtons>
          <Button colorScheme="teal" onClick={goToListTripPage}>
          Ver viagens
          </Button>
          <Button colorScheme="teal" onClick={goToAdminPage}>Área de Admin</Button>
        </SpaceButtons>
      </CenterDiv>
    </ChakraProvider>
  );
}
