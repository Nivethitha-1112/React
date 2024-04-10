import React from "react";
import { useState } from "react";
import ConditionalC from "./ConditionalC";
import './conditional.css';

// For example, if a boolean prop is true, display one message; if it's false, display another.

function ConditionalP (){ //create a functional component with state variable to manage the state.
    const [login, setLogin] = useState(false);

    const togglelogin = () => { //to toggle the login state
        setLogin(!login);
    }
    return(
        <div className = "container">
        <div className="conditionalp">
            <h2>PROPS EXAMPLE: 02</h2>
            <button onClick={togglelogin}>
                {login ? "Log Out" : "Log In"}
            </button>
            <ConditionalC login = {login}/>
        </div>
        </div>
    )
}

export default ConditionalP;