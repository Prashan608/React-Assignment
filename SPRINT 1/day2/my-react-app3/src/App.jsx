import './App.css'
import Card from './components/Card'
function App() {
  

  return (
    <>

      <Card title={"Profile Card"}>

        <p>This is a profile card showing user details.</p>

      </Card>
      
      <Card title={"Contact Card"}>
        
        <p> <b>Email:</b>     Prashantmish932@gmail.com</p>
        <p><b>Phone:</b> +919540396441</p>
        <p><b>Location:</b> Delhi,India</p>

      </Card>

      <Card title={"Project Card"}>
       
       <p><b>Project Name:</b> Todo list App</p>
       <p><b>Tech Stack:</b>HTML,CSS,javaScript</p>
       <p><b>Descripation:</b>A simple Application to add delete and manage daily tasks</p>

      </Card>

    </>
  )
}

export default App
