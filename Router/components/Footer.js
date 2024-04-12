import React from 'react';
import './footer.css';

function Footer() {
  const randomNumber = () => {
    return Math.floor(Math.random() * 9000000000) + 1000000000;
  };

  return (
    <footer className="footer">
      <div className="copyright">
        &copy; 2024 YourCompany. All rights reserved.
      </div>
      <div className="contact">
        Let's connect: <span className="phone">{randomNumber()}</span>
      </div>
    </footer>
  );
}

export default Footer;
