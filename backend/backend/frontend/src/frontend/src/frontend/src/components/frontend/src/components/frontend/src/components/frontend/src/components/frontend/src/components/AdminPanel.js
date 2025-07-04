import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url.com/api/users') // Change this when hosted
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Panel – Paid Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} – {user.email} – Paid on: {new Date(user.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;
