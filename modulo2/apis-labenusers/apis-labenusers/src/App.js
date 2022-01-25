import "./App.css";
import react from "react";
import axios from "axios";

class App extends react.Component {
  state = {
    listUsers: [],
    inputName: "",
    inputEmail: "",
  };

  // componentDidMount = () => {
  //   this.getUsers();
  // };

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  getUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((res) => {
        this.setState({ listUsers: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  signInUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    axios
      .post(url, body, axiosConfig)
      .then((res) => {
        alert("Usuário criado com sucesso!");
        this.setState({ inputName: "" });
        this.setState({ inputEmail: "" });
        this.getUsers();
      })
      .catch((err) => {
        console.log(err.response);
        alert("Erro");
      });
  };

  render() {
    const userList = this.state.listUsers.map((userList) => {
      return (
        <div>
          <p>{userList.name}</p>
        </div>
      );
    });
    console.log("estado", this.state)
    return (
      <div>
        <button>Trocar de tela</button>
        <p></p>
        <input
          placeholder="Nome"
          value={this.state.inputName}
          onChange={this.onChangeName}
        />
        <input
          placeholder="E-mail"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.signInUser}>Criar Usuário</button>

        {this.state.listUsers.length > 0 ? userList : <p>Carregando...</p>}
      </div>
    );
  }
}

export default App;
