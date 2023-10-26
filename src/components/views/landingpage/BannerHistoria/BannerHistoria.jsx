import { HistoriaStyle } from './historia.style';

const BannerHistoria = () => {
  return (
    <HistoriaStyle>
      <div className="container-historia">
        <div className="conteudo">
          <div className="titulo">
            <h2>História AdestraCão</h2>
            <span>(Leonardo fundador)</span>
          </div>
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
        <img className='dog-petisco' src="/dog-petisco.jpg" alt="" />
      </div>
    </HistoriaStyle>
  );
};

export default BannerHistoria;
