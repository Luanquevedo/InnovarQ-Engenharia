import React from 'react'
import Header from '../../components/header/header'
import Sobre from '../../components/sobre/sobre'
import Valores from '../../components/valores/valores'
import VisaoMissao from '../../components/visaoMissao/visaoMissao'
import Equipe from '../../components/equipe/equipe'
import Servicos from '../../components/serviços/servicos'
import Footer from '../../components/footer/footer'
import Nav from '../../components/navBar/nav'

const Home = () => {
  return (
    <main>
      <Nav/>
      <Header/>
      <Sobre/>
      <VisaoMissao/>
      <Valores/>
      <Equipe/>
      <Servicos/>
      <Footer/>
    </main>
  )
}

export default Home