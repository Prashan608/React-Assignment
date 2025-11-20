import '../App.css'
import { useState } from 'react'

function ToggleButton ({label}) {
    
    const [value,setValue] = useState(false);

    function setPower (){
      setValue(!value)
    }
    
    return (
         <div>
         <p>Power:{value?"ON":"OF"}</p>
         <button onClick={setPower}>{label}</button>
         </div>
    )

}

export default ToggleButton;