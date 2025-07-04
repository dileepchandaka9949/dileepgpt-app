import React from "react";
import { useNavigate } from "react-router-dom";

function Pay() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>💰 ₹19 Payment Required</h2>
      <p>Please pay ₹19 to access DileepGPT.</p>
      <p><strong>UPI ID:</strong> dileep@upi</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8f/UPI-QR-code-example.png"
        alt="QR Code"
        style={{ width: "200px", margin: "20px 0" }}
      />
      <p>After payment, click the button below.</p>
      <button onClick={() => navigate("/chat")}>I have paid — Start Chat</button>
    </div>
  );
}

export default Pay;
