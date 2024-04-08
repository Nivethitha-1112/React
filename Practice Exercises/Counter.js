import { useState } from "react";
import './counter.css';

function Counter() {
    const [text, setText] = useState(''); //useState is used to manage the state of functional component.

    const Handleinput = (e) => {
        setText(e.target.value); //this function will be called when the user types the value
    }
    const isOverLimit = text.length > 50;
    return (
        <div className="container">
            <h3>CHARACTER COUNTER</h3>
            <textarea //this is the area where the user types the text
                rows={5} //rows space of the input box
                cols={50} //column space of the input box
                value={text} //text variable will be called
                onChange={Handleinput} //this runs whenever the user types in
                placeholder="Enter your text here..."
            >
            </textarea>

            <p className="character-count"> 
                Character Count: <span className={isOverLimit ? 'character-count-value over-limit' :
                    'character-count-value'}>{text.length}</span>/100
            </p> 
        </div>
    )
}

export default Counter;