import react, { useState } from "react";
import axios from "axios";
import AppBar from "../../Components/AppBar/AppBar";
import ChooseProfilePage from "../../Components/ChooseProfilePage/ChooseProfilePage";
import { BASE_URL } from "../../Constants/urls";
import ResetButton from "../../ResetButton";

export default function MainPage(props) {

  return (
    <div>
      <AppBar changePage={props.changePage} />
      <ChooseProfilePage />
      <ResetButton/>
    </div>
  );
}
