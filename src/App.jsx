import React, { createContext, useState } from 'react'
import './App.css'
import { Header } from './components/NavBar/Header'
import { Background } from './components/background/Background'
import { Pages } from './components/other/pages'
import { Modal } from './components/other/modal'
import { NameComponent } from './components/other/NameComponent'
import { DescripitionComponent } from './components/other/DesciprtionComponent'
// import { windowHeight , windowWidht } from './components/other/WindowFunctions'


export const AppContext = createContext(null)




function App() {
  const [windowWidht, setWindowWidht] = useState(WindowResize())

  window.addEventListener('resize', function () {
    setWindowWidht(WindowResize())
  })

  function WindowResize() {

    var windowWidht = window.innerWidth
    
    switch (true) {
      case windowWidht >= 768:
        return "desktop"
        break;
      case windowWidht >= 640:
        return "tablet"
        break;

      default:
        return "mobile"
        break;

    }
  }

  
  const [pageSelected, setPageSelected] = useState("home")

  return (
    <AppContext.Provider value={{ setPageSelected, pageSelected, windowWidht }}>
      <Background backgroundURL={Pages[pageSelected].background[windowWidht]} >
        <Modal idDoModal="alertModal">
          <div class="text-3xl text-neutral-300 font-bold">Hello!</div>
          <DescripitionComponent><div class="text-center"><span class='text-amber-300 font-semibold '>This page is still in the process of being created</span>, <span class='text-red-400 font-semibold'>errors</span> or <span class='text-red-400 font-semibold'>bugs </span>may occur</div></DescripitionComponent>
          <DescripitionComponent><span class='text-sky-300 font-semibold text-center'>Have a great journey!</span></DescripitionComponent>
        </Modal>
        <Header />
        {Pages[pageSelected].page}
      </Background>

    </AppContext.Provider>
  )
}

export default App