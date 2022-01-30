import react from "react";
import AddPlaylist from "./pages/AddPlaylist/AddPlaylist";
import ShowPlaylists from "./pages/ShowPlaylists/ShowPlaylists";
import DetailsPlaylist from "./pages/DetailsPlaylist/DetailsPlaylist"
import AddTrack from "./pages/AddTrack/AddTrack";

class App extends react.Component {
  state = {
    currentScreen: "addPlaylist",
    clickedPlaylistId: ""
  };

  goToAddPlaylist = () => {
    this.setState({ currentScreen: "addPlaylist", clickedPlaylistId: ""});
  };

  goToShowPlaylists = () => {
    this.setState({ currentScreen: "showPlaylists", clickedPlaylistId: "" });
  };

  goToDetails = (id) => {
    this.setState({ currentScreen: "detailsPlaylist", clickedPlaylistId: id })
  }

  goToAddMusic = () => {
    this.setState({ currentScreen: "AddTrack" })
  }

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "addPlaylist":
        return <AddPlaylist goToShowPlaylists={this.goToShowPlaylists}/>;
      case "showPlaylists":
        return <ShowPlaylists goToAddPlaylist={this.goToAddPlaylist} goToDetails={this.goToDetails}/>;
      case "detailsPlaylist":
        return <DetailsPlaylist idPlaylist={this.state.clickedPlaylistId} goToAddTrack={this.goToAddMusic}/>
      case "AddTrack":
        return <AddTrack idPlaylist={this.state.clickedPlaylistId}/>
      default:
        break;
    }
  };

  render() {
    return <div>{this.chooseScreen()}</div>;
  }
}

export default App;
