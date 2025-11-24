import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";

function App() {
  // Step 1: State to track which page is active
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        {/* Step 2: Navbar receives both state and function */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* Step 3: PageContent receives current active page */}
        <PageContent activePage={activePage} />
      </div>
    </>
  );
}

export default App;
