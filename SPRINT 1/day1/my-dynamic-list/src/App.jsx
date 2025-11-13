import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const arr = ["React","javaScript","CSS"]

  return (
    <div>
      
      {arr.map((ele, index) => <p key={index}>{ele}</p>)}

    </div>
  )
}

export default App
