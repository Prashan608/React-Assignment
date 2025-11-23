import { useEffect, useState } from "react";
import "../App.css";

function Stopwatch() {

  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [target, setTarget] = useState(10);

  function startTimer() {
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
  }

  function resetTimer() {
    setTime(0);
    setRunning(false);
  }

  // Interval logic
  useEffect(() => {
    if (isRunning) {
      let timer = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning]);

  // Check target
  useEffect(() => {
    if (time === target) {
      setRunning(false);
      console.log("Target reached!");
      new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg").play();
    }
  }, [time, target]);

  return (
    <div>
      <h2>Time: {time} sec</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
