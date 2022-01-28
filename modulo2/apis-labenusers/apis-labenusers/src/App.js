import react from "react";
import axios from "axios";
import ScreenRegister from "./components/ScreenRegister";
import ScreenUserList from "./components/ScreenUserList";
import ScreenDetails from "./components/ScreenDetails";

class App extends react.Component {
  state = {
    currentScreen: "register",
  };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "register":
        return <ScreenRegister goToList={this.goToList} />;
        break;
      case "userList":
        return <ScreenUserList goToRegister={this.goToRegister} goToDetails={this.goToDetails}/>;
        break;
      case "details":
        return <ScreenDetails/>
      default:
        return <p>Error! Page not found</p>;
        break;
    }
  };

  goToRegister = () => {
    this.setState({ currentScreen: "register" });
  };

  goToList = () => {
    this.setState({ currentScreen: "userList" });
  };

  goToDetails = () => {
    this.setState({ currentScreen: "details" })
  }

  render() {
    return <div>{this.chooseScreen()}</div>;
  }
}

export default App;
