import styled from "styled-components";

const StyleLanding = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .home {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    background-color: #36e2ff;
  }
  .cachorropata {
    border-radius: 8px;
    padding: 50px;
    width: 500px;
  }

  .content {
    width: 30%;
    display: flex;
    flex-direction: column;
  }

  .logolading {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .logolading h2 {
    font-family: Paytone One;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 9px;
    text-align: center;
  }

  p {
    text-align: justify;
    font-family: Inter;
    font-size: 20px;
    padding: 10px 0;
  }
  section.historia {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fef699;
  }

  .containerHistoria {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background-color: #e7e3b8;
    border-radius: 8px;
    margin-right: 10px;
  }

  .containerHistoria h2 {
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
  }
`;

export default StyleLanding;