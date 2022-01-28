import react from "react";
import AddPlaylist from "./components/AddPlaylist";
import ShowPlaylists from "./components/ShowPlaylists";

class App extends react.Component {
  state = {
    currentScreen: "addPlaylist",
  };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "addPlaylist":
        return <AddPlaylist goToShowPlaylists={this.goToShowPlaylists}/>;
        break;
      case "showPlaylists":
        return <ShowPlaylists goToAddPlaylist={this.goToAddPlaylist}/>;
      default:
        break;
    }
  };

  goToAddPlaylist = () => {
    this.setState({ currentScreen: "addPlaylist" });
  };

  goToShowPlaylists = () => {
    this.setState({ currentScreen: "showPlaylists" });
  };

  render() {
    return <div>{this.chooseScreen()}</div>;
  }
}

export default App;
