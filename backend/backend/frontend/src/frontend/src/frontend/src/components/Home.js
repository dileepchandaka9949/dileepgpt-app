import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/pay');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>DileepGPT 🤖</h1>
      <h2>Powered by Dileep Chandaka</h2>
      <p>Talk with your own Telugu + English AI Assistant for just ₹19</p>
      <button onClick={handleProceed} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Proceed to Pay ₹19
      </button>
    </div>
  );
};

export default Home;
