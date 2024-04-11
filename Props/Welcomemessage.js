//Define default props for the child component. Ensure that if certain props are not passed 
//from the parent component, the child component uses the default values.
import React from 'react';
import './welcomemessage.css'

const Welcomemessage = (props) => { //defined a functional component called Welcome message
    const {name} = props //destructuring the name from prop object
  return ( //render a welcome message with name 
    <div className='welcome'>
    <h2>PROPS EXAMPLE : 03</h2>
    <p>Default Props: If the certain props are not passed from the parent component, 
      the child component uses a default value</p>
    <p>Hello {name}!</p>
    </div>
  );
}

//Defining a defaultProps for a welcome message.
Welcomemessage.defaultProps = {
   name: 'Guest' //Default name is 'Guest' if 'name' prop is not provided
}
export default Welcomemessage;