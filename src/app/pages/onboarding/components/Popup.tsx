import React from 'react';

interface PopupProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, content, onClose }) => {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={onClose} style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff' }}>
        Close
      </button>
    </div>
  );
};

export default Popup;