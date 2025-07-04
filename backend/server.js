const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config'); // use config.js instead of .env

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use routes from routes/api.js
app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


