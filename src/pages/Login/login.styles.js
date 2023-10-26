import styled from 'styled-components';

const LoginStyled = styled.div`
  background-color: #36E2FF;
  width: 100%;
  height: 100vh;
  
  .voltar{
    display: flex;
    flex-direction: column;
    padding: 15px;
    cursor: pointer;
  }

  main{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
  }

  .stylesLeft{
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    text-align: justify ;
  }

  .stylesRight{
    width: 30%;
    height: 80%;
    background-color: #f2f2f2;
    display: flex;
    justify-content:center;
    border-radius: 15px;
  }

  form{
    height: 100%;
    width:80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default LoginStyled;