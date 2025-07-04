import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>🧠 DileepGPT</h1>
      <p>
        Welcome to DileepGPT — Your personal ₹19 AI-powered assistant. Built by
        Dileep Chandaka to help with life, goals, and growth.
      </p>
      <p>Available in English & Telugu. Covers all topics: education, fitness, career, life.</p>
      <button onClick={() => navigate("/pay")}>Continue to ₹19 Payment</button>
    </div>
  );
}

export default Home;
