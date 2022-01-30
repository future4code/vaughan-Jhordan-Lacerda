import react from "react";
import axios from "axios";
import { TrackCard, AudioPlayer } from "./styled";
// import imgPause from "../../img/pause_black_24dp"

export default class DetailsPlaylist extends react.Component {
  state = {
    musics: [],
  };

  componentDidMount() {
    this.getPlaylistTracks();
  }

  getPlaylistTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`;
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((res) => {
        console.log(res);
        this.setState({ musics: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const musicList = this.state.musics.map((music) => {
      return (
          <TrackCard>
            <p>Musica:{music.name}</p>
            <p>Artista: {music.artist}</p>
            <AudioPlayer controls><source src={music.url}/></AudioPlayer>
          </TrackCard>
      );
    });

    return (
      <TrackCard>
        <p>{console.log(this.playlistName)}</p>
        {musicList}
        <button onClick={this.props.goToAddTrack} id={this.props.idPlaylist}>
          Adicionar música a playlist
        </button>
      </TrackCard>
    );
  }
}
