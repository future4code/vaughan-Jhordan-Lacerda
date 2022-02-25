import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SpaceButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BigH1 = styled.h1`
  font-size: 2rem;
  font-weight: bolder;
`;

export const BigH2 = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

export const CardCandidate = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 10px;
  width: 34rem;
  height: 16rem;
  justify-content: space-between;
  align-items: center;
`;

export const CardCandidateApproved = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 20rem;
  height: 10rem;
  align-items: center;
  justify-content: center;
`;
