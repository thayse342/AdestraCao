import React from 'react'
import Header from '../../components/views/landingpage/Header/Header'
import StyleLanding from './landingpage.styles.js'


const Landinpage = () => {
  return (
    <>
    <Header/>
    <StyleLanding>
        <img className="cachorropata" src="/cachorro-pata.svg" />
        <div className="content">
         <div className='logolading'>
            <img src="/cao-logo(1).svg" alt="logo" />
            <h2>ADESTRA  <br />CÃO  </h2>
            
        </div>
        <p>Nossa abordagem se baseia no respeito, na paciência e na comunicação positiva. Acreditamos que cada animal é único, e nosso objetivo é ajudar a construir um vínculo forte entre você e seu companheiro de quatro patas.</p>
    
       <p>Oferecemos treinamento personalizado para atender às necessidades individuais do seu pet, seja para obediência básica, solução de problemas comportamentais ou até mesmo truques divertidos.</p>
        </div>
        </StyleLanding>


    <section>
        
    </section>
    
    </>
  )
}

export default Landinpage