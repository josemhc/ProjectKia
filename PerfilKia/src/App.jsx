import { useState } from 'react'
import { Navbar } from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import { Inicio } from './components/Inicio'
import { Catalogos } from './components/Catalogos'
import { Contacto } from './components/Contacto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='Catalogos' element={<Catalogos />}></Route>
        <Route path='Contactanos' element={<Contacto />}></Route>
        <Route path='/' element={<Inicio />}></Route>
      </Route>
    </Routes>
    </div>
  )
}

export default App
