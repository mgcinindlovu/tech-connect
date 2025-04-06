import React, { useState } from 'react';
import ChatSection  from './components/ChatSection';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!', isUser: false },
    { text: 'Hi there!', isUser: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage('');
    }
  };

  return (
    <ChatSection
      messages={messages}
      newMessage={newMessage}
      onSendMessage={handleSendMessage}
      onMessageChange={(e) => setNewMessage(e.target.value)}
    />
  );
};

export default ChatPage;