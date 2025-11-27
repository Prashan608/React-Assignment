import { useState } from 'react'
import ToggleVisibility from './components/ToggleVisibility'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <ToggleVisibility/>
     </div>
    </>
  )
}

export default App
