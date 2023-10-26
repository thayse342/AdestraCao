import styled from "styled-components";

export const PorqueStyle = styled.section`
  background: #36E2FF;

  .container-porque {
    display: flex;
    gap: 20px;
    margin: 0 auto;
    padding: 80px 0;
    max-width: 1200px;
    align-items: center;
  }
  
  h2 {
    font-size: 48px;
  }

  .contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 60px;
  }

  .qualidade,
  .seguranca,
  .carinho,
  .monitoramento {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div {
      display: flex;
      gap: 8px;
      margin-top: 24px;
    }

    img {
      max-width: 28px;
    }

    p {
      max-width: 80%;
      grid-column: 1 / -1;
    }
  }
`