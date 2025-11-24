import '../App.css'
import { useState } from 'react'

function ToggleButton({ label }) {
  const [value, setValue] = useState(false);

  function setPower() {
    setValue(!value);
  }

  return (
    <div>
      <p style={{ color: value ? "green" : "red" }}>
        {label}: {value ? "ON" : "OFF"}
      </p>

      <button onClick={setPower}>
        Toggle
      </button>
    </div>
  );
}

export default ToggleButton;
