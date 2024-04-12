import React from 'react';
import './signin.css';

function Signin() {
  return (
    <div>
      <h3>Sign In Form</h3> 
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="small-input" /> 
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className="small-input" /> 
        </div>
        <button type="submit" className="small-button">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
