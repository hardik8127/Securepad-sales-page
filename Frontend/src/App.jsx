import { useState } from 'react'
import { Navbar, Hero, Accordian, CoinDescription, Team, Footer } from './components'

import './App.css'

function App() {
  
  return (
    <section>
    <Navbar/>
    <Hero/>
    <CoinDescription/>
    <Team/>
    <Footer/>
    </section>
  
  )
}

export default App
