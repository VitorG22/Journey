import React from 'react'
import { useState } from 'react'
import './App.css'
import { Header } from './components/NavBar/Header'
import { HomePage } from './components/HomePage/homePage'
import { Destination } from './components/DestinationPage/Destination'
import { Background } from './components/background/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background >
        <Header />
        <Destination />
        {/* <HomePage/> */}
      </Background>

    </>
  )
}

export default App
