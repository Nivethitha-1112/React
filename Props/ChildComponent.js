import React from "react";

function ChildComponent (props){
    return (
        <div className="childc">
            <h3>Passing data from Parent to Child Component</h3>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}

export default ChildComponent;