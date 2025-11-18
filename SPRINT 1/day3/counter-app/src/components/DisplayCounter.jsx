import "../App.css"
import { useState } from "react"

function DisplayCount() {
   
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0) setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>

            {count === 10 && <p>Goal Reached!</p>}

            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default DisplayCount;
