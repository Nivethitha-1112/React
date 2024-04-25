import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput'; 
import './App.css';

const socket = io('http://localhost:3000');

function App() {
  const [messages, setMessages] = useState([]);
  const [waitingForReply, setWaitingForReply] = useState(false);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });
  }, []);

  const handleSendMessage = message => {
    socket.emit('message', message);
    setWaitingForReply(true);
  };

  return (
    <div className="App">
      <h1>Chat Application</h1>
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
      {waitingForReply && <div className="wait-message">Wait for your reply...</div>}
    </div>
  );
}

export default App;
