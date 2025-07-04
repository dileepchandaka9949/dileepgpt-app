import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePaymentDone = () => {
    alert('Payment simulated. Access granted!');
    navigate('/chat');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Pay ₹19 to Unlock DileepGPT Chat</h2>
      <p>Scan the QR below or use UPI ID</p>

      <img
        src="https://via.placeholder.com/200?text=Fake+QR"
        alt="QR Code"
        style={{ margin: '1rem 0' }}
      />
      <p><strong>UPI ID:</strong> dileepgpt@upi</p>

      <button
        onClick={handlePaymentDone}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        I Have Paid – Continue
      </button>
    </div>
  );
};

export default PaymentPage;
