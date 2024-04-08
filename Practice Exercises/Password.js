import { useState } from "react";
import './password.css';

function Resetpassword() { //State to hold values in the form
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleevent = (e) => {
        e.preventDefault(); // prevents the browser from submitting the form and reloading the page.

        //Basic Validation
        if (!email || !newPassword || !confirmPassword) { //check if any field is empty?
            setErrorMessage("Please fill out these fields");
            return;
        }
        if (newPassword !== confirmPassword) { //check if the password doesn't match
            setErrorMessage("Password doesn't match");
            return;
        }

        setSuccessMessage("Password changed successfully!")

        //clear the form fields & error message
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
        setErrorMessage('');
    };
    return (
        <div className="passwordform">
            <div>
                <h3>RESET PASSWORD FORM</h3>
                <form onSubmit={handleevent}>
                    <div className="form">
                        <label>Email: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form">
                        <label>New Password: </label>
                        <input type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <div className="form">
                        <label>Confirm Password: </label>
                        <input type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                    <button type="submit">Reset Password</button>
                </form>
            </div >
        </div>
    )
}

export default Resetpassword;