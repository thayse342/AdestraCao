import styled from "styled-components";

export const StyleModal = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgb(0,0,0, 0.7);
z-index: 1000;

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  left: 50%;
  padding-bottom: 48px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  width: 670px;
  height: 425px;

  .header {
    width: 650px; 
    padding-left: 20px;
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #5EB1FF;
    border-radius: 8px 8px 0 0 ;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 130px; 
    gap: 12px;
  }

  .footer {
    justify-content: space-around;
    align-items: center;
    width: 100%;
    display: flex;
    gap: 12px;
    >.esquerda {
      margin-left: 80px;
    }
    >.direita {
      display: flex;
      gap: 24px;
      margin-right: 80px;
    }
  }
}
`