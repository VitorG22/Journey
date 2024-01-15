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
    <AppContext.Provider value={{setPageSelected , pageSelected}}>
      <Background backgroundURL={Pages[pageSelected].background} >
        <Modal>
          <NameComponent>Ola!</NameComponent>
          <DescripitionComponent><span class='text-amber-300 font-semibold'>Esta pagina ainda esta em processo de criação</span>, é possivel que ocorram <span class='text-red-400 font-semibold'>erros</span> ou <span class='text-red-400 font-semibold'>bugs</span></DescripitionComponent>
          <DescripitionComponent>É aconselhavel a visualização da pagina em <span class='text-sky-300 font-semibold'>Dispositivos moveis</span>, pois sua versão para Desktop ainda não foi implementada   </DescripitionComponent>
          <DescripitionComponent><span class='text-sky-300 font-semibold'>Tenha uma otima jornada!</span></DescripitionComponent>
        </Modal>
        <Header/>
        {Pages[pageSelected].page}
      </Background>

    </AppContext.Provider>
  )
}

export default App
