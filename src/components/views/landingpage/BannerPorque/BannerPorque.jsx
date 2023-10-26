import { PorqueStyle } from './porque.style';

const BannerPorque = () => {
  return (
    <PorqueStyle className="porque">
      <div className="container-porque">
        <img className="adestrador" src="/adestrador-e-cao.jpg" alt="" />
        <div className="container-conteudo">
          <h2>POR QUE NOS ESCOLHER?</h2>
          <div className="contents">
            <div className="qualidade">
              <div>
                <img src="/SealCheck.svg" alt="" />
                <h3>Qualidade</h3>
              </div>
              <p>Adestramento de qualidade e com carinho, tendo reforço positivo.</p>
            </div>

            <div className="seguranca">
              <div>
                <img src="/ShieldChevron.svg" alt="" />
                <h3>Segurança</h3>
              </div>
              <p> Tenha toda a segurança que o seu pet merece, somente profissionais verificados.
              </p>
            </div>

            <div className="carinho">
              <div>
                <img src="/HandHeart.svg" alt="" />
                <h3>Carinho</h3>
              </div>
              <p>Todo amor que seu pet merece mesmo fora de casa.</p>
            </div>

            <div className="monitoramento">
              <div>
                <img src="/VideoCamera.svg" alt="" />
                <h3>Monitoramento</h3>
              </div>
              <p> Tenha toda a segurança que o seu pet merece, somente profissionais verificados</p>
            </div>

          </div>
        </div>
      </div>
    </PorqueStyle>
  );
};

export default BannerPorque;
