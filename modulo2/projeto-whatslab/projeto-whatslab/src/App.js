import styled from "styled-components";
import './index.css';
import EnviarMensagem from "./componentes/EnviarMensagem";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Div className="App">
      <EnviarMensagem />
    </Div>
  );
}

export default App;
