import react from "react";
import axios from "axios";

export default class ScreenRegister extends react.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  signUp = () => {
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
        alert("Usuário(a) cadastrado(a) com sucesso");
        this.setState({ inputName: "" });
        this.setState({ inputEmail: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.goToList}>Ir para Lista de Usuários</button>
        <h2>Cadastro</h2>

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
        <button onClick={this.signUp}>Criar Usuário</button>
      </div>
    );
  }
}
