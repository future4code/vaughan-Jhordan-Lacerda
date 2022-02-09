import GlobalStyle from "./styles/global"
import {useState} from "react";
import MainPage from "./Pages/MainPage/MainPage";
import MatchPage from "./Pages/MatchPage/MatchPage";

function App() {
  const [mainPage, setMainPage] = useState(true)

  const changePage = () => {
    setMainPage(!mainPage)
  }

  const switchPage = () => {
    if(mainPage){
      return <MainPage changePage={changePage}/>
    } else {
      return <MatchPage changePage={changePage}/>
    }
  }

  return (
    <div>
      {switchPage()}
      <GlobalStyle/>
    </div>
  );
}

export default App;
