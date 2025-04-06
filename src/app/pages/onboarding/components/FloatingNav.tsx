import React from 'react';

interface FloatingNavProps {
  onChat: () => void;
  onUsers: () => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onChat, onUsers }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', position: 'fixed', bottom: '10px', width: '100%' }}>
      <button onClick={onChat} style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff' }}>
        Chat
      </button>
      <button onClick={onUsers} style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff' }}>
        Users
      </button>
    </div>
  );
};

export default FloatingNav;