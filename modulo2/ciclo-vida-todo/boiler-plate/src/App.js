import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: 1,
        texto: "Tirar poeira das coisas",
        completa: false,
      },
      {
        id: 2,
        texto: "Estudar",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.id !== this.state.id) {
      localStorage.setItem("id", this.state.id);
      console.log("Salvei o id");
    }

    if(prevState.texto !== this.state.texto){
      localStorage.setItem("texto", this.state.texto);
      console.log("Salvei o texto");
    }

    if(prevState.completa !== this.state.completa){
      localStorage.setItem("completa", this.state.completa);
      console.log("Salvei o completa");
    }
  }

  componentDidMount() {
    this.selectTarefa();
    const idLS = localStorage.getItem("id")
    const textoLS = localStorage.getItem("texto")
    const completaLS = localStorage.getItem("completa")

    this.setState({id: idLS, texto: textoLS, completa: completaLS})
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novaLista = [...this.state.tarefas, novaTarefa];

    localStorage.setItem("historicoMensagens" , JSON.stringify(novaLista));

    this.setState({ tarefas: novaLista });
  };

  selectTarefa = (id) => {
    const novaListaTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });
    JSON.parse(localStorage.getItem("historicoMensagens"))
    this.setState({ tarefas: novaListaTarefa });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
