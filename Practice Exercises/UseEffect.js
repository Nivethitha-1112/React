//useEffect is the react hooks which performs side effects in the functional components
//Basic Usage: Implementing a component that logs a message to the console after every render using useEffect.
import React, { useEffect } from 'react';

function BasicUsage() {
    useEffect(() => {
        console.log('Component rendered'); // This message will be logged to the console
    });

    return <div>Check the console.</div>; // This message will be displayed on the webpage
}

export default BasicUsage;