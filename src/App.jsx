import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  


  return (
    <div className='Apps'>
        <Navbar/>
        <div className='Content'>
            <Home/>
        </div>
    </div>
  )
}

export default App
