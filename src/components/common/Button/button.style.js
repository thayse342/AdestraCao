import styled from "styled-components";


export const StyleButton = styled.button`
  width:auto;
  border-radius: 6px;
  border-color: #5EB1FF;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 48px;
  align-items: center;
  font-size: ${props => props.fontSize};
  transition: background .3s;

  &:hover{
    background-color:#1C7ED9;
  }
`;


export const PrimaryButton = styled(StyleButton)`
  width: ${props => props.width ? props.width : 'fit-content'};
  height: ${props => props.height ? props.height : 'fit-content'};
   background: #5EB1FF;
   color: white;
`
export const SecondaryButton = styled(StyleButton)`
  width: ${props => props.width ? props.width : 'fit-content'};
  height: ${props => props.height ? props.height : 'fit-content'};
  background: #fff;
   color: #5DB1FF;
   &:hover{
    color: #C3E2FF;
  }
   `