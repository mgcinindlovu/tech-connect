import React from 'react';

interface CategoryButtonProps {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ isSelected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        margin: '5px',
        borderRadius: '5px',
        backgroundColor: isSelected ? '#007bff' : '#f1f1f1',
        color: isSelected ? '#fff' : '#000',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default CategoryButton;