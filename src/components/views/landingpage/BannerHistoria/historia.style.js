import styled from "styled-components";

export const HistoriaStyle = styled.section`
  background-color: #fef699;

  .container-historia {
    display: flex;
    gap: 120px;
    margin: 0 auto;
    padding: 80px 0;
    max-width: 1200px;
  }

  .conteudo {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 600px;
    background: #E7E3B8;
    position: relative;
    padding-top: 80px;
    z-index: 2;

    p {
      font-size: 20px;
    }
  }

  h2 {
    font-size: 36px;

    span {
      font-size: 20px;
    }
  }

  .conteudo::before {
    position: absolute;
    content: '';
    width: 50%;
    height: 100%;
    bottom: 0;
    left: -50%;
    background: #E7E3B8;
  }

  .conteudo::after {
    position: absolute;
    content: '';
    width: 20%;
    height: 100%;
    bottom: 0;
    right: -18%;
    background: #E7E3B8;
    z-index: 1;
  }

  .dog-petisco {
    width: 100%;
  }
`