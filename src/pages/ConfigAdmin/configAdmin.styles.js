import styled from 'styled-components';

const ConfigAdminStyled = styled.div`
  width: 70%;
  padding-top: 25px;
  margin: 0 auto;
  

  main{
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
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

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 5px;
  }

  .containerItem{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;

  }

  .item{
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  hr{
    margin: 15px;

  }

`;

export default ConfigAdminStyled;