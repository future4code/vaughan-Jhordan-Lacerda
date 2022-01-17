import React from "react";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

        <p>5. Qual curso?</p>
        <input />

        <p>6. Qual a unidade de ensino?</p>
        <input />

        <p></p>

        <button onClick={this.props.mudaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}
