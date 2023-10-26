import styled from "styled-components";

export const HomeStyle = styled.section`
    background-color: #36e2ff;

    .container-home {
      display: flex;
      gap: 100px;
      margin: 0 auto;
      padding: 80px 0;
      max-width: 1200px;
    }

    .conteudo {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 20px;
      }
    }

    .logolading {
      display: flex;
      align-items: center;
      gap: 12px;
      text-align: center;
    }

    p {
      margin-top: 40px;
      max-width: 400px;
    }
`