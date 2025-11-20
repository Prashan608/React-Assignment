import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
   
  return (
    <>
     <div>
      <ProfileCard name="Prashant" age={25} bio = "i am software Developer"/>
      <ProfileCard name="Ayush" age={20} bio ="I am python developer"/>
      <ProfileCard/>
     </div>
    </>
  )
}

export default App
