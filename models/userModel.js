const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    roll_number: {
      type: String,
      required: true,
    },
    numbers: {
      type: [Number],
      required: true,
    },
    alphabets: {
      type: [String],
      required: true,
    },
    highest_lowercase: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    }
  });
  module.exports = mongoose.model('UserData', UserDataSchema);
