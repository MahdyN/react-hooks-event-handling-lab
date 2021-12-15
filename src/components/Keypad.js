import React from "react";

function Keypad() {
    
    function passwordChange() {
        console.log("Entering password...")
    }

    return(
        <input 
        type="password"
        onChange={passwordChange}
         />
    )
}

export default Keypad;



