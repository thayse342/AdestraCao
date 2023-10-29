import styled from 'styled-components';

const ClienteStyled = styled.div`
padding: 25px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;

 .inputContainer{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
  
 }

 .error-message {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fad2e1;
  border: 1px solid #7c193d;
  color: #7c193d;
  padding: 10px;
  border-radius: 5px;
  z-index: 1;
  opacity: 1; 
}

.success-message {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #EFE;
  border: 1px solid #658666;
  color: #658666;
  padding: 10px;
  border-radius: 5px;
  z-index: 1;
  opacity: 1; 
}

 .inputItem{
    width: 45%;
 }
`;

export default ClienteStyled;