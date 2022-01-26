import react from "react";
import axios from "axios";
import ScreenRegister from "./components/ScreenRegister";
import ScreenUserList from "./components/ScreenUserList";

class App extends react.Component {
  state = {
    currentScreen: "register",
  };

  // componentDidMount = () => {
  //   this.getUsers();
  // };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "register":
        return <ScreenRegister goToList={this.goToList} />;
        break;
      case "userList":
        return <ScreenUserList goToRegister={this.goToRegister} />;
        break;
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

  render() {
    return <div>{this.chooseScreen()}</div>;
  }
}

export default App;
