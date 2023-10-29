import styled from "styled-components";

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  color: #474554;
  background-color: #EAF6F8;

  .wrapper {
    display: flex;
    width: 100%;
    height: calc(100vh - 60px);
  }

  .barra-lateral {
    width: 264px;
    height: 100%;
    padding: 15px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    border-right: 1px solid #E0E0E0;
  }

  hr{
    margin: 25px auto;
    text-align: center;
  }

  ul {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li > a > svg {
    margin-right: 10px;
  }

  li > a {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    color: #474554;
  }

  a:visited{
    color: #474554;
  }

  a.active{
    color: #5EB1FF;
  }

  .header-layout {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border-bottom: 1px solid #E0E0E0;
  }

  .header-layout > a {
    display: flex;
    align-items: center;
  }

  .header-layout > a > svg {
    margin-left: 5px;
  }

  main {
    width: calc(100vw - 264px);
  }

  
`;
