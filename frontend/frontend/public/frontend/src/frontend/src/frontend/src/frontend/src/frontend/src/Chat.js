import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm DileepGPT. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "Thanks for your message! (Note: This is demo only)." }
    ]);
    setInput("");
  };

  return (
    <div className="container">
      <h2>DileepGPT Chat</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "15px" }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.sender === "user" ? "You" : "DileepGPT"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "80%", padding: "8px", marginRight: "5px" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chat;
