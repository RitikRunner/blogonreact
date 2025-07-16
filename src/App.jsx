
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Create from './pages/Create';

function App() {
  


  return (
    <Router>
    <div className='Apps'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Create" element={<Create />} />

      </Routes>
    </div>
    </Router>
  )
}

export default App
