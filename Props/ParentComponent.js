import React from "react";
import ChildComponent from './ChildComponent';
import './parent.css';

//Passing data from this parent component to child component is called props.

function ParentComponent(){
    const name = "Nivi";
    const age = 25;

    return(
        <div className="parentc">
            <h2>PROPS EXAMPLE: 01</h2>
            {/* Passing data to child component */}
            <ChildComponent name={name} age={age}/> 
        </div>
    )
}

export default ParentComponent;