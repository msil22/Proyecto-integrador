import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Footer from './Footer/Footer'


function App() {

  return (
    <>
      
      <Link to={"/"}><h1>Ir a main</h1></Link>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptatum dolor voluptatem temporibus sequi? Pariatur sequi vel eveniet quaerat deleniti porro ipsam architecto assumenda, expedita voluptate saepe? Aspernatur, voluptatem magni?</p>
      <button>Prueba</button>
    </>
  )
}

export default App
