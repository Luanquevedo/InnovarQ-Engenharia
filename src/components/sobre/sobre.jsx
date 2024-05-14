import React from 'react'
import './index.scss'

const Sobre = () => {
  return (
    <section>
      <div className='sobre' id='sobre'>
        <img src='sobreImg.svg' alt='sobre'/>
        <div className='sobre__container'>
          <h1>
            Sobre Nós
          </h1>
          <p>
            A InnovarQ Engenharia tem 15 anos de experiência no mercado, unindo qualidade e inovação para construir um<br/>
            futuro sustentável na engenharia predial. Nossa missão é oferecer soluções que combinam tecnologia de ponta<br/>
            com práticas sustentáveis, garantindo projetos de alta qualidade e eficiência. Com uma equipe altamente<br/>
            capacitada e comprometida, buscamos constantemente a excelência em cada projeto que realizamos.<br/>
            Valorizamos a transparência em nossas relações, a credibilidade de nossos serviços e o interesse em contribuir,<br/>
            para um ambiente mais sustentável.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre