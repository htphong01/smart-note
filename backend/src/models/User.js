const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  socialId: { type: String, unique: true },
  name: { type: String },
  avatar: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
