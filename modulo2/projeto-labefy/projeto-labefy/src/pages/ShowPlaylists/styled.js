import styled from "styled-components";

export const PlaylistCard = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 400px;
  &:hover {
    cursor: pointer;
    background-color: lightgreen;
  }
`;

export const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
