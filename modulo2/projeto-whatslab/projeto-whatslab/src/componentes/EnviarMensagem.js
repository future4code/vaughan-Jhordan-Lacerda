import react from "react";
import styled from "styled-components";

const Feed = styled.div`
  min-width: 600px;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Mensagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
`;

const NomeEmNegrito = styled.span`
  font-weight: bold;
`;

const Inputs = styled.div`
  display: flex;
`;

const InputNome = styled.input`
  display: flex;
  flex-grow: 2;
  max-height: 20px;
`;

const InputMensagem = styled.input`
  display: flex;
  flex-grow: 10;
  max-height: 20px;
`;

class EnviarMensagem extends react.Component {
  state = {
    infoMensagem: [
      {
        nome: "",
        mensagem: "",
      },
    ],
    valorInputNome: "",
    valorInputMensagem: "",
  };

  enviaMensagem = () => {
    const novaMensagem = {
      nome: `${this.state.valorInputNome}:`,
      mensagem: this.state.valorInputMensagem,
    };

    const adicionarMensagem = [novaMensagem, ...this.state.infoMensagem];

    this.setState({ infoMensagem: adicionarMensagem });
    this.setState({ valorInputMensagem: "" });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaDeMensagens = this.state.infoMensagem.map((info) => {
      return (
        <p>
          <NomeEmNegrito>{info.nome}</NomeEmNegrito> {info.mensagem}
        </p>
      );
    });
    return (
      <Feed>
        <Mensagem>{listaDeMensagens}</Mensagem>
        <Inputs>
          <InputNome
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder="Usuário"
          />
          <InputMensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder="Mensagem"
          />
          <button onClick={this.enviaMensagem}>Enviar</button>
        </Inputs>
      </Feed>
    );
  }
}

export default EnviarMensagem;
