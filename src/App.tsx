import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TopGrid from './components/TopGrid'

function App() {
  

  return (
    <div className="App">
      
      <header className="App-header">
        <TopGrid/>
       
      </header>

      <footer>
      <div className="attribution">
        
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="femizi.netlify.app">Femi Efejuku</a>.
  </div>
      </footer>
    </div>
  )
}

export default App
