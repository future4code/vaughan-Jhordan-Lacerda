import react from "react";
import axios from "axios";
import { CardInputs, SpaceBetweenInputs } from "./styled";

export default class AddTrack extends react.Component {
  state = {
    name: "",
    artist: "",
    url: "",
  };

  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`;
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(url, body, axiosConfig)
      .then((res) => {
        alert("Música adicionada");
        this.setState({ name: "", artist: "", url: "" });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleArtist = (e) => {
    this.setState({ artist: e.target.value });
  };

  handleUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  render() {
    return (
      <CardInputs>
        <SpaceBetweenInputs
          placeholder="Nome da música"
          value={this.state.name}
          onChange={this.handleName}
        />
        <SpaceBetweenInputs
          placeholder="Nome do(a)(s) artista(s)"
          value={this.state.artist}
          onChange={this.handleArtist}
        />
        <SpaceBetweenInputs
          placeholder="Url da música"
          value={this.state.url}
          onChange={this.handleUrl}
        />

        <button onClick={this.addTrackToPlaylist}>Adicionar música</button>
      </CardInputs>
    );
  }
}
