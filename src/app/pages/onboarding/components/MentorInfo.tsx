import React from 'react';

interface MentorInfoProps {
  name: string;
  role: string;
  contact: string;
  email: string;
}

const MentorInfo: React.FC<MentorInfoProps> = ({ name, role, contact, email }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{contact}</p>
      <p>{email}</p>
    </div>
  );
};

export default MentorInfo;