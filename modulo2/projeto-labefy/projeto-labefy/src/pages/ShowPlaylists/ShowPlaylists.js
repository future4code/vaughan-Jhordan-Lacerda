import react from "react";
import axios from "axios";
import { ListCard, PlaylistCard } from "./styled";

export default class ShowPlaylists extends react.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    const message = window.confirm(
      "Tem certeza que deseja deletar essa playlist?"
    );

    if (message) {
      axios
        .delete(url, axiosConfig)
        .then((res) => {
          alert("Playlist removida com sucesso");
          this.getPlaylist();
        })
        .catch((err) => {
          alert("Ocorreu um erro, tente novamente!");
        });
    } else {
      alert("Ainda bem que não deletou essa playlist");
    }
  };

  render() {
    const listPlaylist = this.state.playlists.map((playlist) => {
      return (
        <PlaylistCard key={playlist.id} onClick={() => this.props.goToDetails(playlist.id)}>
          <p>{playlist.name}</p>
          <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
        </PlaylistCard>
      );
    });

    return (
      <ListCard>
        <h3>Lista de Playlists</h3>
        {listPlaylist}
        <button onClick={this.props.goToAddPlaylist}>
          Voltar para página de adicionar playlist
        </button>
      </ListCard>
    );
  }
}
