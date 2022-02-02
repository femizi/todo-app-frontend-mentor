import { useState } from 'react'
import {DataList} from './MyContext';
;

import './App.css'
import TopGrid from './components/TopGrid'

function App() {
  

  return (
    <div className="App">
      
      <header className="App-header">
        <DataList>
        <TopGrid/>
        </DataList>
       
       
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
