import React from "react";

function ConditionalC(props) {
    const { login } = props; //ChildComponent receives a prop login from the parent component

    return (
        <div className="conditionalc">
            <h3>Conditional Rendering Method</h3>
            {login ? (<p>Welcome, user!</p>) : (<p>Please log in to view the content.</p>)} 
            {/* If the button shows log in, it displayes please log in. If it shows log out it displays welcome */}
        </div>
    )
}

export default ConditionalC;