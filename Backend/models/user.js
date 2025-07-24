const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: String,
  password: { type: String, required: function() { return !this.googleId; } }, // Only required if not using Google
  googleId: { type: String },
  linkedinId: { type: String },
  role: { type: String, enum: ['jobseeker', 'recruiter'], default: 'jobseeker' }
});

module.exports = mongoose.model('User', userSchema);
