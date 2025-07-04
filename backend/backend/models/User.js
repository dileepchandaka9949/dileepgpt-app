const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  paymentStatus: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
