import "../App.css"
import { useState } from "react";

function Counter ({value}) {
 
    const[count,setCount] = useState(value);
    
    function increment () {
        setCount(count+1);
    }

    function decrement () {

        if(count>0) setCount(count-1);
    }

    function reset () {

        setCount(0);
    }

    return (

        <div>
            <h1>Count:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={count===0}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default Counter;