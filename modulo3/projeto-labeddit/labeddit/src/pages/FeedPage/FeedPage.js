import react from "react";
import { UseProtectedPage } from "../../hook/useProtectedPage";
import {ScreenContainer } from "./styled";
import { FeedForm } from "./FeedForm";

const FeedPage = () => {
  
  UseProtectedPage();
  return (
    <ScreenContainer>
      <FeedForm/>
    </ScreenContainer>
  );
};

export default FeedPage;
