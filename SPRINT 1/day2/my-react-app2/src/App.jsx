import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display : "flex", justifyContent :"center", gap:5}}>
       <Card title="Profile Card">
        <button>click me</button>
        </Card>
      <Card title="Contact Card">
        <p>Contact me on mail</p>
        </Card>
      <Card title = "Project Card">
        <p>Your project is make to do list</p>
      </Card>
    </div>
     
    </>
  )
}

export default App
