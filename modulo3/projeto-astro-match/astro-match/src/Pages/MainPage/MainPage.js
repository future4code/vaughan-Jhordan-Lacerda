import react, { useState } from "react";
import axios from "axios";
import AppBar from "../../Components/AppBar/AppBar";
import ChooseProfilePage from "../../Components/ChooseProfilePage/ChooseProfilePage";
import { BASE_URL } from "../../Constants/urls";

export default function MainPage(props) {

  return (
    <div>
      <AppBar changePage={props.changePage} />
      <ChooseProfilePage />
    </div>
  );
}
