import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import MinhaFoto from "./img/imagem-jhordan.jpeg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const Input = styled.input`
  color: green;
  border-color: black;
  margin: 0 10px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeDeUsuario: "paulinha",
        fotoDeUsuario: "https://picsum.photos/50/50",
        fotoDoPost: "https://picsum.photos/200/150",
      },
      {
        nomeDeUsuario: "Jhordan",
        fotoDeUsuario: MinhaFoto,
        fotoDoPost: "https://picsum.photos/200/151",
      },
      {
        nomeDeUsuario: "Silvia",
        fotoDeUsuario: "https://picsum.photos/50/51",
        fotoDoPost: "https://picsum.photos/200/152",
      },
    ],

    valorInputUser: "",
    valorInputFotoUser: "",
    valorInputFotoPost: "",
  };

  adicionaUser = () => {
    const novoUser = {
      nomeDeUsuario: this.state.valorInputUser,
      fotoDeUsuario: this.state.valorInputFotoUser,
      fotoDoPost: this.state.valorInputFotoPost,
    };

    const novoUsers = [...this.state.posts, novoUser];

    this.setState({ posts: novoUsers });
    this.setState({ valorInputUser: "" });
    this.setState({ valorInputFotoUser: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  onChangeInputNomeDeUsuario = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputFotoDeUsuario = (event) => {
    this.setState({ valorInputFotoUser: event.target.value });
  };

  onChangeInputFotoDoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.posts.map((post) => {
      return (
        <MainContainer>
          <Post
            nomeUsuario={post.nomeDeUsuario}
            fotoUsuario={post.fotoDeUsuario}
            fotoPost={post.fotoDoPost}
          />
        </MainContainer>
      );
    });

    return (
      <div>
        {listaDeComponentes}
        <hr />
        <FormContainer>
          <Input
            value={this.state.valorInputUser}
            onChange={this.onChangeInputNomeDeUsuario}
            placeholder="Nome de usuário"
          />
          <Input
            value={this.state.valorInputFotoUser}
            onChange={this.onChangeInputFotoDeUsuario}
            placeholder="Link da foto de usuário"
          />
          <Input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoDoPost}
            placeholder="Link da foto do post"
          />

          <button onClick={this.adicionaUser}>Enviar</button>
        </FormContainer>
      </div>
    );
  }
}

export default App;
