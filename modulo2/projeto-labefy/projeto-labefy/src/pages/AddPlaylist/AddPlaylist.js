import react from "react";
import axios from "axios";
import { AddPlaylistCard, ButtonSpace } from "./styled";

export default class addPlaylist extends react.Component {
  state = {
    inputPlaylistName: "",
  };

  handleInputPlaylist = (e) => {
    this.setState({ inputPlaylistName: e.target.value });
  };

  addPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = { name: this.state.inputPlaylistName };
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    axios
      .post(url, body, axiosConfig)
      .then((res) => {
        alert("Playlist adicionada");
        console.log(res);
        this.setState({ inputPlaylistName: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <AddPlaylistCard>
        <h3>Adicionar Playlist</h3>

        <input
          placeholder="Nome da Playlist"
          value={this.state.inputPlaylistName}
          onChange={this.handleInputPlaylist}
        />

        <ButtonSpace onClick={this.addPlaylist}>Adicionar Playlist</ButtonSpace>
        <ButtonSpace onClick={this.props.goToShowPlaylists}>Mostrar playlists</ButtonSpace>
      </AddPlaylistCard>
    );
  }
}
