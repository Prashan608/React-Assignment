import { useState } from "react";

function ColorToggle(){
 const [color,setColor] = useState("green");
 
 function handleColor(){
    if(color === "green"){
        setColor("yellow")
    }
    else{
        setColor("green");
    }
 }
 return(
    <div style={{padding : 10, margin:10,display: "flex",justifyContent:"center"}}>
    <button style={{backgroundColor : color, padding :8,margin:5}}onClick={handleColor}>Color: {color.charAt(0).toUpperCase() + color.slice(1)}
</button>
    <p>Color:{color}</p>
    </div>
 )
}

export default ColorToggle;