import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SpaceButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const BigH1 = styled.h1`
  font-size: 2rem;
`;

export const CardTrip = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 10px;
  width: 30rem;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  &:hover {
      background-color: lightgrey;
  }

`;
