import react from "react";
import axios from "axios";
import styled from "styled-components";

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

export default class ScreenUserList extends react.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente");
      });
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    const message = window.confirm("Tem certeza que deseja deletar esse usuário?");

    if(message) {
      axios
      .delete(url, axiosConfig)
      .then((res) => {
        alert("Usuário(a) excluído(a) com sucesso!")
        this.getUsers();
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente!")
      });
    }else {
      alert("Ainda bem que não deletou ele.")
    }
  };

  render() {
    const userList = this.state.users.map((user) => {
      return (
        <UserCard key={user.id}>
          <button onClick={this.props.goToDetails}>{user.name}</button>
          <button onClick={() => this.deleteUser(user.id)}>X</button>
        </UserCard>
      );
    });

    return (
      <div>
        <button onClick={this.props.goToRegister}>
          Ir para página de cadastro
        </button>
        <h2>Lista de Usuários:</h2>
        {userList}
      </div>
    );
  }
}
