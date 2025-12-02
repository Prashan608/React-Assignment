// src/App.jsx

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1> Redux Toolkit Counter </h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "10px" }}
      >
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
