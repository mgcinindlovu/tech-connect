import React from 'react';
import  FloatingNav  from './components/FloatingNav';

interface NewSectionPageProps {
  onChat: () => void;
  onUsers: () => void;
}

const NewSectionPage: React.FC<NewSectionPageProps> = ({ onChat, onUsers }) => {
  return (
    <div>
      <h1>New Section</h1>
      <FloatingNav onChat={onChat} onUsers={onUsers} />
    </div>
  );
};

export default NewSectionPage;