import React from "react";

export default class BasicInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Etapa 1 - Dados Gerais</h3>

        <p>1. Qual o seu nome</p>
        <input />

        <p>2.Qual a sua idade?</p>
        <input />

        <p>3.Qual o seu email?</p>
        <input />

        <p>4.Qual a sua escolaridade?</p>
        <select>
          <option value="Ensino médio incompleto" selected>
            Ensino médio incompleto
          </option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">
            Ensino superior incompleto
          </option>
          <option value="Ensino superior completo">
            Ensino superior completo
          </option>
        </select>

        <p />

        <button onClick={this.props.mudaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}
