import React from "react";
import styled from "styled-components";

const BigCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const ImgCardGrande = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const H4CardGrande = styled.h4`
  margin-bottom: 15px;
`;

const DivCardGrande = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

function CardGrande(props) {
  return (
    <BigCard>
      <ImgCardGrande src={props.imagem} />
      <DivCardGrande>
        <H4CardGrande>{props.nome}</H4CardGrande>
        <p>{props.descricao}</p>
      </DivCardGrande>
    </BigCard>
  );
}

export default CardGrande;
