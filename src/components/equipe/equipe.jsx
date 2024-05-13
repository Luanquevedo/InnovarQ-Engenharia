import React from 'react'
import './index.scss'

const Equipe = () => {
  return (
    <section className='equipe'>
      <div className='equipe__title'>
        <h1>
          Nossa Equipe
        </h1>
      </div>
      <div className='equipe__container'>
        <div className='equipe__card'>
          <img src='andre.svg' alt='andre'/>
          <div>
            <h1>
              André Silva - Engenheiro Civil e Fundador
            </h1>
            <p>
              André Silva é o fundador e diretor da InnovarQ Engenharia, com mais de 20
              anos de experiência na área da construção civil. Sua paixão pela
              engenharia começou na infância, brincando com blocos de construção e
              projetando casas imaginárias. Ao longo dos anos, transformou essa paixão
              em uma carreira de sucesso, liderando projetos inovadores e sustentáveis
              que deixam um impacto positivo nas comunidades em que a empresa
              atuar.
            </p>
          </div>
        </div>
        <div className='equipe__card'>
          <img src='carolina.svg' alt='carolina'/>
          <div>
            <h1>
              Carolina Santos - Arquiteta Sênior
            </h1>
            <p>
              Carolina Santos é uma arquiteta talentosa e criativa, com uma visão única
              para espaços arquitetônicos modernos e funcionais. Sua jornada na
              InnovarQ Engenharia começou como estagiária, onde demonstrou
              habilidades excepcionais em design e planejamento. Com o passar dos
              anos, tornou-se uma peça fundamental na equipe, liderando projetos
              desafiadores e inspirando outros membros com sua criatividade e
              comprometimento.
            </p>
          </div>
        </div>
        <div className='equipe__card'>
          <img src='pedro.svg' alt='pedro'/>
          <div>
            <h1>Pedro Oliveira - Engenheiro de Infraestrutura</h1>
            <p>
              Pedro Oliveira é um engenheiro de infraestrutura dedicado e apaixonado
              por soluções inovadoras em desenvolvimento urbano. Sua trajetória
              profissional na InnovarQ Engenharia é marcada por sua expertise em
              projetos de infraestrutura sustentável e eficiente. Desde a concepção até
              a execução, Pedro é conhecido por sua abordagem meticulosa e sua
              capacidade de encontrar soluções inteligentes para os desafios mais
              complexos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Equipe