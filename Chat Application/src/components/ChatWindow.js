import React from 'react';
import MessageDisplay from './MessageDisplay';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      <MessageDisplay messages={messages} />
    </div>
  );
}

export default ChatWindow;
