import "./App.css"
import UserProfile from "./components/userProfile";

function App() {
const user = {
    name: "Prashant Mishra",
    email: "Prashantmish932@gmail.com"
  };

  return (
    <div>
      <h1>Welcome</h1>
      <UserProfile user = {user} />
    </div>
  );
}

export default App;