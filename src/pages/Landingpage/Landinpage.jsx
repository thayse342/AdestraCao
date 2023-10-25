import React from "react";
import Header from "../../components/views/landingpage/Header/Header";
import StyleLanding from "./landingpage.styles.js";

const Landinpage = () => {
  return (
    <>
      <Header />

      <StyleLanding>
        <section className="home">
          <img className="cachorropata" src="/cachorro-pata.svg" />
          <div className="content">
            <div className="logolading">
              <img src="/cao-logo(1).svg" alt="logo" />
              <h2>
                ADESTRA <br />
                CÃO{" "}
              </h2>
            </div>
            <p>
              Nossa abordagem se baseia no respeito, na paciência e na
              comunicação positiva. Acreditamos que cada animal é único, e nosso
              objetivo é ajudar a construir um vínculo forte entre você e seu
              companheiro de quatro patas.
            </p>

            <p>
              Oferecemos treinamento personalizado para atender às necessidades
              individuais do seu pet, seja para obediência básica, solução de
              problemas comportamentais ou até mesmo truques divertidos.
            </p>
          </div>
        </section>

        <section className="historia">
          <div className="containerHistoria">
            <h2>História AdestraCão</h2>
            <span>(Leonardo fundador)</span>
            <p>
              Sou um apaixonado adestrador de animais com anos de experiência no
              treinamento e cuidado de diversas espécies de cães.
            </p>
            <p>
              Minha jornada como adestrador começou com um profundo amor pelos
              animais e um desejo de garantir que eles tenham vidas felizes e
              saudáveis.
            </p>
            <p>
              Vamos trabalhar juntos para fortalecer o relacionamento com seu
              pet e garantir que cada dia seja uma experiência maravilhosa para
              ambos.
            </p>
          </div>
          <img src="/dog-petisco.svg" alt="" />
        </section>

        <section className="porque">
          <img className="adestrador" src="/adestrador-e-cao.svg" alt="" />
          <div className="containerpq">
            <h2>POR QUE NOS ESCOLHER?</h2>
            <div className="contents">
              <div className="content">
                <div className="qualidade">
                  <div className="icone">
                    <img src="/SealCheck.svg" alt="" />
                    <h3>Qualidade</h3>
                  </div>

                  <p>
                    Adestramento de qualidade e com carinho, tendo reforço
                    positivo.
                  </p>
                </div>

                <div className="segurança">
                  <div className="icone">
                    <img src="/ShieldChevron.svg" alt="" />
                    <h3>Segurança</h3>
                  </div>
                  <p>
                    Tenha toda a segurança que o seu pet merece, somente
                    profissionais verificados.
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="carinho">
                  <div className="icone">
                    <img src="/HandHeart.svg" alt="" />
                    <h3>Carinho</h3>
                    </div>
                    <p>Todo amor que seu pet merece mesmo fora de casa.</p>
                  </div>

                  <div className="monitoramento">
                  <div className="icone">
                    <img src="/VideoCamera.svg" alt="" />
                    <h3>Monitoramento</h3>
                    </div>
                    <p>
                      Tenha toda a segurança que o seu pet merece, somente
                      profissionais verificados
                    </p>
                  </div>
                
              </div>
            </div>
          </div>
        </section>
      </StyleLanding>
    </>
  );
};

export default Landinpage;
