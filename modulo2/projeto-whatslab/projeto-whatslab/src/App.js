import styled from "styled-components";
import EnviarMensagem from "./componentes/EnviarMensagem";

const Div = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

function App() {
  return (
    <Div className="App">
      <EnviarMensagem />
    </Div>
  );
}

export default App;
