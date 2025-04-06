import React from 'react';

interface User {
  id: number;
  name: string;
  role: string;
  profilePicture: string;
}

const mockUsers: User[] = [
  { id: 1, name: 'John Doe', role: 'Software Developer', profilePicture: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Jane Smith', role: 'Data Scientist', profilePicture: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Alice Johnson', role: 'UI/UX Designer', profilePicture: 'https://via.placeholder.com/50' },
];

const UsersPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Users</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {mockUsers.map((user) => (
          <div
            key={user.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <img
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
            />
            <div>
              <h3 style={{ margin: 0 }}>{user.name}</h3>
              <p style={{ margin: 0, color: '#666' }}>{user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;