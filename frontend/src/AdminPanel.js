import React, { useEffect, useState } from 'react';

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dileepgpt-backend.onrender.com/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Admin Panel</h2>
      <p>Total Users: {users.length}</p>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.email || 'User ' + (i + 1)}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
