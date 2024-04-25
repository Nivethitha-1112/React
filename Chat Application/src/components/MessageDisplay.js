import React from 'react';

function MessageDisplay({ messages }) {
  return (
    <div className="messages">
      {messages.map((message, index) => (
        <div key={index} className="message">
          {message}
        </div>
      ))}
    </div>
  );
}

export default MessageDisplay;
