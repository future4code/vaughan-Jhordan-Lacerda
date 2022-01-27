import React from "react";
import "./App.css";
import BasicInfo from "./pages/BasicInfo";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import Etapa4 from "./pages/Etapa4";

class App extends React.Component {
  state = {
    etapa: 1,
  };

  trocarEtapa2 = () => {
    this.setState({ etapa: 2 });
  };

  trocarEtapa3 = () => {
    this.setState({ etapa: 3 });
  };

  trocarEtapa4 = () => {
    this.setState({ etapa: 4 });
  };

  render() {
    const renderizarEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <BasicInfo mudaEtapa={this.trocarEtapa2} />;
          break;
        case 2:
          return <Etapa2 mudaEtapa={this.trocarEtapa3} />;
          break;
        case 3:
          return <Etapa3 mudaEtapa={this.trocarEtapa4} />;
          break;
        case 4:
          return <Etapa4 />;
          break;
        default:
          return <p>Page Not Found</p>;
          break;
      }
    };

    return <div className="App">{renderizarEtapa()}</div>;
  }
}

export default App;
