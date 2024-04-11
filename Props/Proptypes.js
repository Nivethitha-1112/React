//Use prop types to define the expected types of props for the child component. 
//Test by passing props of incorrect types and observe any warnings in the console.

import React from 'react';
import PropTypes from 'prop-types';
import './proptypes.css'

function Proptypes(props) {
    return (
        <div className='proptypes'>
            <h2>PROPS EXAMPLE: 04</h2>
            <p>Prop Types: It is used to defined the expected type of props (For Ex: String, Number) orelse it will show an error.</p>
            <p>Username: {props.username} </p>
            <p>Age : {props.age}</p>
        </div>
    )
}

//defining a proptypes for the prototypes component
Proptypes.propTypes = {
    username: PropTypes.string.isRequired, //username should only be in string
    age: PropTypes.number.isRequired, //age should only be in number
}

export default Proptypes;