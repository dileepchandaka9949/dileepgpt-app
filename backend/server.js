const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./routes/api");

app.use(cors());
app.use(express.json());

// Link API routes
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to DileepGPT Backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
