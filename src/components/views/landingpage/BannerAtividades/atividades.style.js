import styled from "styled-components";

export const AtividadesStyle = styled.section`
  background: #FFFFFF;

  .container-atividade {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin: 0 auto;
    padding: 80px 0;
    max-width: 1200px;

    h2 {
      font-size: 48px;
      text-transform: uppercase;
    }

    .cards {
      max-width: 900px;
      place-content: center;
      gap: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`