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
            Vamos trabalhar juntos para fortalecer o relacionamento com seu pet
            e garantir que cada dia seja uma experiência maravilhosa para ambos.
          </p>
        </div>
        <img src="/dog-petisco.svg" alt="" />
      </section>
      </StyleLanding>
    </>
  );
};

export default Landinpage;
