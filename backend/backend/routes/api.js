const express = require("express");
const router = express.Router();

// Sample route for chat
router.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  // In future, process with GPT
  res.json({ reply: `DileepGPT says: You said "${userMessage}"` });
});

module.exports = router;
