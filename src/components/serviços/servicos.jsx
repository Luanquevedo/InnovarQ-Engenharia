import React from 'react'
import './index.scss'

const Servicos = () => {
  return (
    <section className='serv'>
      <div className='serv__title'>
        <h1>Serviços</h1>
        <p>Descubra a excelência em engenharia e construção oferecida pela InnovarQ Engenharia. Nossa equipe altamente qualificada e especializada está pronta para transformar seus projetos em realidade, com soluções inovadoras e de alta qualidade.
</p>
      </div>
      <div className='serv__container'>
        <div className='serv__card'>
          <img src='civil.svg' alt='Construção Civil'/>
          <div>
            <h1>
              Construção Civil
            </h1>
            <p>
              Projetamos e executamos obras residenciais, comerciais e
              industriais que refletem excelência em cada detalhe. Desde a
              concepção até a entrega, garantimos um processo transparente e
              eficiente, resultando em construções de alta qualidade e
              durabilidade.
            </p>
          </div>
        </div>
        <div className='serv__card'>
          <img src='pavimentacao.svg' alt='Pavimentação'/>
          <div>
            <h1>
              Pavimentação
            </h1>
            <p>
              Especialistas em pavimentação de vias públicas e privadas,
              oferecemos soluções que combinam qualidade e durabilidade.
              Nossos serviços de pavimentação são projetados para resistir ao
              tempo e às condições adversas, garantindo vias seguras e bem
              estruturadas.
            </p>
          </div>
        </div>
        <div className='serv__card'>
          <img src='infra.svg' alt='Infraestrutura Urbana'/>
          <div>
            <h1>
              Infraestrutura Urbana
            </h1>
            <p>
              Desenvolvemos infraestrutura urbana sustentável e eficiente,
              contribuindo para cidades mais modernas e funcionais. Nossos
              projetos incluem planejamento inteligente, uso de tecnologias
              avançadas e práticas sustentáveis para criar ambientes urbanos de
              alta qualidade.
            </p>
          </div>
        </div>
        <div className='serv__card'>
          <img src='laudo.svg' alt='Laudo Técnico'/>
          <div>
            <h1>Laudo Técnico</h1>
            <p>
              Elaboramos laudos técnicos detalhados para garantir a segurança
              e conformidade das edificações. Nossos profissionais experientes
              realizam inspeções minuciosas e fornecem relatórios precisos para
              garantir a integridade estrutural e a segurança dos projetos.          
            </p>
          </div>
        </div>
        <div className='serv__card'>
          <img src='fundacao.svg' alt='Fundações'/>
          <div>
            <h1>Fundações</h1>
            <p>
              Especializados em projetos e execução de fundações sólidas,
              garantimos a estabilidade e segurança das estruturas. Utilizamos
              técnicas avançadas e materiais de qualidade para criar fundações
              duráveis e confiáveis, essenciais para o sucesso de qualquer
              construção.
            </p>
          </div>
        </div>
      </div>
      <div className='serv__link'>
        <div className='serv__blog'>
          <button className='serv__a'>
            Fique por dentro das últimas novidades, tendências e
            dicas do mundo da engenharia predial em nosso blog.
          </button>
          <button className='serv__b'>
            <img src='bloc.svg' alt='blog'/>
          </button>
        </div>
        <button className='serv__c'>
          Fale Conosco
        </button>
      </div>
    </section>
  )
}

export default Servicos