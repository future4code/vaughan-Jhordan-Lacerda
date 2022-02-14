import react, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "../../Components/AppBar/AppBar";
import { BASE_URL } from "../../Constants/urls";

export default function MatchPage(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    GetMatches();
  }, []);

  const GetMatches = () => {
    const url = `${BASE_URL}/:jhordan/matches`;

    axios
      .get(url)
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const listMatches = matches.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.photo} alt="Imagem de perfil" />
        {item.name}
      </div>
    );
  });

  return (
    <div>
      <AppBar changePage={props.changePage} />
      <h1>MatchPage</h1>
      {listMatches}
    </div>
  );
}
