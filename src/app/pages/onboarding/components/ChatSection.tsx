import React from 'react';

interface ChatSectionProps {
  messages: { text: string; isUser: boolean }[];
  newMessage: string;
  onSendMessage: () => void;
  onMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChatSection: React.FC<ChatSectionProps> = ({ messages, newMessage, onSendMessage, onMessageChange }) => {
  return (
    <div>
      <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.isUser ? 'right' : 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: message.isUser ? '#007bff' : '#f1f1f1',
              color: message.isUser ? '#fff' : '#000',
              borderRadius: '10px',
              display: 'inline-block',
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={newMessage}
          onChange={onMessageChange}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={onSendMessage} style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSection;