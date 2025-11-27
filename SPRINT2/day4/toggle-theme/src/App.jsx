import { useState } from 'react'
import ToggleTheme from './components/ToggleTheme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleTheme/>
    </>
  )
}

export default App
