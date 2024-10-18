import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pageheader from './Components/Pageheader'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
     <Pageheader/>

    </>
  )
}

export default App
