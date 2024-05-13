import React from 'react'
import './index.scss'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__a'>
        <h1>Endereço</h1>
        <p>
          R. Rua Engenheiro Pedro Campos | nº 123  | Novo Horizonte<br/>
          Brasilia - DF, 05866-090 
        </p>
      </div>
        <div className='Footer__b'>
          <div>
            <img src='logo.svg' alt='logo'/>
          </div>
          <div>
            <p>
              © 2024 InnovarQ Engenharia
            </p>
          </div>
        </div >
        <div className='Footer__c'>
          <h1>Contatos</h1>
          <div>
            <img src='' alt=''/>
            <p>Telefone: (00) 1234-5678</p>
          </div>
          <div>
          <img src='' alt=''/>
          <p>E-mail: AndreSilva@innovarq.com</p>
        </div>
      </div>
      <div></div>
    </footer>
  )
}

export default Footer