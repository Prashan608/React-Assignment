import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [title,setTitle] = useState ("Document");

   function changeTitle(){
     
    if(title === "Document") {

      setTitle("React");
      document.title = "React";

    }

    else {

      setTitle("Document");
      document.title = "Document";
    }
    
    setCount(count+1)
    
   }
  return (
    <>
       <div style={{textAlign:"center",marginTop:'50px'}}>

         <h1>React Virtual Dom Demo</h1>
         <button onClick={changeTitle}> click me </button>
         <p>Current Title : {title}</p>
         <p>Dom Updates : {count}</p>
       </div>
    </>
  )
}

export default App
