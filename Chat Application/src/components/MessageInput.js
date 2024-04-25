import React, { useState } from 'react';

function MessageInput({ onSendMessage }) {
  const [messageInput, setMessageInput] = useState('');

  const handleMessageChange = e => {
    setMessageInput(e.target.value);
  };

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      onSendMessage(messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        placeholder="Type your message..."
        value={messageInput}
        onChange={handleMessageChange}
      />
      <button className="send-button" onClick={sendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;
