import React from 'react'
import { useState } from 'react'
import './App.css'
import { Header } from './components/NavBar/Header'
import { HomePage } from './components/HomePage/homePage'
import { Destination } from './components/DestinationPage/Destination'
import { Background } from './components/background/Background'
import { Crew } from './components/CrewPage/Crew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background >
        <Header />
        <Crew/>
        {/* <Destination /> */}
        {/* <HomePage/> */}
      </Background>

    </>
  )
}

export default App
