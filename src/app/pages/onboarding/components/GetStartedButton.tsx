import React from 'react';

interface GetStartedButtonProps {
  onClick: () => void;
  children?: React.ReactNode; // Add children prop to accept content inside the button
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = '#0056b3';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = '#007bff';
      }}
      onMouseDown={(e) => {
        (e.target as HTMLButtonElement).style.transform = 'scale(0.95)';
      }}
      onMouseUp={(e) => {
        (e.target as HTMLButtonElement).style.transform = 'scale(1)';
      }}
    >
      {children}
    </button>
  );
};

export default GetStartedButton;