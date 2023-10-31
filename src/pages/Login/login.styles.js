import styled from 'styled-components';

const LoginStyled = styled.div`
  background-color: #36E2FF;
  width: 100%;
  height: 100vh;
  
  .voltar {
    display: flex;
    flex-direction: column;
    padding: 15px;
    cursor: pointer;
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



  main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
  }

  .stylesLeft {
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    text-align: justify;
  }

  .stylesRight {
    width: 30%;
    height: 80%;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    border-radius: 15px;
  }

  form {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .password-reset-link{
    text-decoration: underline;
  }
`;

export default LoginStyled;