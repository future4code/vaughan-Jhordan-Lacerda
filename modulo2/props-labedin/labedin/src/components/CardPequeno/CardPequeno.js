import React from "react";
import styled from "styled-components";

const CardPequenoEstilo = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 50px;
  width: 40.7%;
`;

const ImagemCardPequeno = styled.img`
  width: 35px;
  margin-right: 10px;
  border-radius: 50%;
`;

const H4CardPequeno = styled.h4`
  margin-right: 10px;
`;

const DivCardPequeno = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
`;

const CardPequeno = (props) => {
  return (
    <CardPequenoEstilo>
      <ImagemCardPequeno src={props.imagem} />
      <DivCardPequeno>
        <H4CardPequeno>{props.nome}</H4CardPequeno>
        <p>{props.informacao}</p>
      </DivCardPequeno>
    </CardPequenoEstilo>
  );
};

export default CardPequeno;
