import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail_icon.svg'
import phone_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "931c1d39-02ab-450c-ab5a-983b0054bc32");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send me a message <img src={msg_icon} alt="" /></h3>
        <p>I'm currently available to take on new projects, so feel free to reach out through contact form or find my contact information below.</p>
        <ul>
          <li><img src={mail_icon} alt="" />johdoe2024@gmail.com</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />Texas, US</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message....' required />
          <button type="submit" className='submit-btn'>
            Submit now
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" style={{ color: "#86654b" }} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact