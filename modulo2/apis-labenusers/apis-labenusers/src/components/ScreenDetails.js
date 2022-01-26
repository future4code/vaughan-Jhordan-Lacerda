import react from "react";
import axios from "axios";

export default class ScreenDetails extends react.Component {
  state = {
    users: [],
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
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente");
      });
  };

  getUserById = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const axiosConfig = {
      headers: { Authorization: "jhordan-lacerda-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((res) => {
        console.log("Usuário pegado");
      })
      .catch((err) => {
        console.log("Erroo");
      });
  };

  render() {
      const userDetails = this.state.users.map((user) => {
        return (
            <div>
                {this.getUserById(user.id)}
            </div>
        )
      })
    return {userDetails}
  }
}
