//Create an input field that allows users to type in their name, and display a greeting message using their name.
import { useState } from "react";
import  './inputfield.css';


function InputField(){
    const [name, setName] = useState(''); //Created a state variable name

    const HandleInput = (e) => {
        setName(e.target.value); //by typing the name in input box this event should perform
    }

    return(
        <div className="inputfield">
            <h3>INPUT FIELD FORM</h3>
            <input
            type ="text"
            value={name}
            onChange={HandleInput}
            placeholder="Enter your name"
            />
            {name && <p>Hello, {name}!</p>} 
        </div>
    )
}

export default InputField;