import React from 'react'
import { useState } from 'react'
import './App.css'
import { Header } from './components/NavBar/Header'
import { Background } from './components/background/Background'
import {Pages} from './components/other/pages'

function App() {
  

  const [count, setCount] = useState(0)
  const [pageSlected , setPageSelected] = useState("crew")

  return (
    <>
      <Background backgroundURL = {Pages[pageSlected].background} >
        <Header func = {setPageSelected}/>
        {Pages[pageSlected].page}
        {/* <Crew /> */}
        {/* <Destination /> */}
        {/* <HomePage/> */}
      </Background>

    </>
  )
}

export default App
