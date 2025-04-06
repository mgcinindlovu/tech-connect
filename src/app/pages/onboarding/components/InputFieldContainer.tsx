import React from 'react';

interface InputFieldContainerProps {
  children: React.ReactNode;
}

const InputFieldContainer: React.FC<InputFieldContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </div>
  );
};

export default InputFieldContainer;