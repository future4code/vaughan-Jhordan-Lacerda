import axios from "axios";
import { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import { ContainerDiv } from "./styles";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (e) => {
    setPokeName(e.target.value);
  };

  return (
    <ContainerDiv>
    <select onChange={changePokeName}>
      <option value={""}>Nenhum</option>
      {pokeList.map((pokemon) => {
        return (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        );
      })}
    </select>

    {pokeName && <PokeCard pokemon={pokeName}/>}
    </ContainerDiv>
  );
}

export default App;
