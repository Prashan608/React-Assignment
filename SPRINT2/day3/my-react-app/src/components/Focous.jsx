import { useState,useRef } from "react";

function Focous () {

  const [isFocused,setFocused] = useState(false);  
  const inputRef = useRef(null);

  function handleClick () {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";

    setFocused(true);

  }


  return (

    <div>
        <input type="text" ref={inputRef} placeholder="Enter here"/>
        {isFocused && <p>focused</p>}
        <button onClick={handleClick}>click me</button>
        
    </div>
  )
 
}

export default Focous