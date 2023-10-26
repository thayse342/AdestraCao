import styled from "styled-components";

export const StyleCard = styled.div`
  display: flex;
  width: 300px;
  height: 297px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
  border-radius: 8px;
  background: #36E2FF;
  text-align: center;
  transition: ease-in-out .2s;

  &:hover {
    scale: 1.1;
  }
`