import { useState } from "react";
import CorrectedText from "./CorrectedText";

function AutoCorrectApp() {
  const [inputText, setInputText] = useState("");

  // Predefined corrections dictionary
  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AutoCorrect App</h1>

      <input
        type="text"
        placeholder="Type your sentence..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: "8px", width: "80%" }}
      />

      <h3>Corrected Text:</h3>
      <CorrectedText text={inputText} corrections={corrections} />
    </div>
  );
}

export default AutoCorrectApp;
