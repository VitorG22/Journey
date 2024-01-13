import React, { createContext ,useState } from 'react'
import './App.css'
import { Header } from './components/NavBar/Header'
import { Background } from './components/background/Background'
import { Pages } from './components/other/pages'
import { Modal } from './components/other/modal'
import { Title } from './components/other/TitleComponent'
import { NameComponent } from './components/other/NameComponent'
import { DescripitionComponent } from './components/other/DesciprtionComponent'

export const AppContext = createContext(null)

function App() {

  

  const [pageSelected, setPageSelected] = useState("home")

  return (
    <AppContext.Provider value={{setPageSelected}}>
      <Background backgroundURL={Pages[pageSelected].background} >
        <Modal>
          <NameComponent>Ola!</NameComponent>
          <DescripitionComponent>Esta pagina ainda esta em processo de criação, é possivel que ocorram erros ou bugs</DescripitionComponent>
          <DescripitionComponent>É aconselhavel a visualização da pagina em Dispositivos moveis, pois sua versão para Desktop ainda não foi implementada   </DescripitionComponent>
          <DescripitionComponent>Tenha uma otima jornada!</DescripitionComponent>
        </Modal>
        <Header/>
        {Pages[pageSelected].page}
      </Background>

    </AppContext.Provider>
  )
}

export default App
