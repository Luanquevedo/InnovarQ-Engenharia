import React from 'react'
import Header from '../../components/header/header'
import Sobre from '../../components/sobre/sobre'
import Valores from '../../components/valores/valores'
import VisaoMissao from '../../components/visaoMissao/visaoMissao'
import Equipe from '../../components/equipe/equipe'
import Servicos from '../../components/serviços/servicos'
import Footer from '../../components/footer/footer'
import Nav from '../../components/navBar/nav' // Certifique-se de importar o Nav corretamente

const Home = () => {
  return (
    <main>
      <Nav/>
      <Header/>
      <Sobre id='sobre' /> {/* Use o mesmo ID aqui */}
      <VisaoMissao id='visao-missao' /> {/* Use o mesmo ID aqui */}
      <Valores id='valores' /> {/* Use o mesmo ID aqui */}
      <Equipe id='equipe' /> {/* Use o mesmo ID aqui */}
      <Servicos id='servicos' /> {/* Use o mesmo ID aqui */}
      <Footer/>
    </main>
  )
}

export default Home
