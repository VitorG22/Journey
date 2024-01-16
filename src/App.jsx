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
        <Modal idDoModal = "alertModal">
          <NameComponent>Hello!</NameComponent>
          <DescripitionComponent><span class='text-amber-300 font-semibold'>This page is still in the process of being created</span>, <span class='text-red-400 font-semibold'>errors</span> or <span class='text-red-400 font-semibold'>bugs </span>may occur</DescripitionComponent>
          <DescripitionComponent>It is advisable to view the page in <span class='text-sky-300 font-semibold'>Mobile devices</span>, because its Desktop version has not yet been implemented </DescripitionComponent>
          <DescripitionComponent><span class='text-sky-300 font-semibold'>Have a great journey!</span></DescripitionComponent>
        </Modal>
        <Header/>
        {Pages[pageSelected].page}
      </Background>

    </AppContext.Provider>
  )
}

export default App
