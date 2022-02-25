import React from "react";
import { CardCandidato } from "./styled";

export const CardTrip = (props) => {
  return (
    <CardCandidato>
      <p>
        <strong>Nome:</strong> {props.name}
      </p>
      <p>
        <strong>Descrição:</strong> {props.description}
      </p>
      <p>
        <strong>Planeta:</strong> {props.planet}
      </p>
      <p>
        <strong>Duração: </strong>
        {props.durationInDays}
      </p>
      <p>
        <strong>Data: </strong>
        {props.date}
      </p>
    </CardCandidato>
  );
};
