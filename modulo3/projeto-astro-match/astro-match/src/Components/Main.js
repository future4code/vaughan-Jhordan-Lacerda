import { useState } from "react";
import MainPage from "../Pages/MainPage/MainPage";
import MatchPage from "../Pages/MatchPage/MatchPage";

export default function Main() {
  const [mainPage, setMainPage] = useState(true);

  const changePage = () => {
    setMainPage(!mainPage);
  };

  const switchPage = () => {
    if (mainPage) {
      return <MainPage changePage={changePage} />;
    } else {
      return <MatchPage changePage={changePage} />;
    }
  };

  return <div>{switchPage()}</div>;
}
