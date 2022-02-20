import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormColumn = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
`

export const SelectResized = styled.select`
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 0px 0px 15px;
    width: 100%;
`

export const SpaceButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 50px;
`;

export const BigH1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 2%;
`;
