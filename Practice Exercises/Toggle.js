import { useState } from "react"; //importing useState from react library
import './toggle.css';

const Togglebutton = () => { //declaring a state variable to manage the state
    const [isOn, setIsOn] = useState(true);

    const toggle = () => { // Event Handler to toggle the state
        setIsOn(!isOn); //flipping its value to the opposite of its current value.
    }
    return (
        <div className="toggle">
            <h3>TOGGLE BUTTON </h3>
            <p>The toggle button is: {isOn ? 'On' : 'Off'}</p>
            <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>
        </div>
    );
};

export default Togglebutton;