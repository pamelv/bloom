const mongoose = require("mongoose");

const { Schema } = mongoose;

const CheckInSchema = new Schema({
  emotion: {
    type: String,
    required: true
  },
  emoji: {
    type: String,
    required: true
  },
  emotionCreatedAt: {
    type: Date,
    default: Date.now()
  },
  comment: {
    type: String
  }
});

const CheckIn = mongoose.model("CheckIn", CheckInSchema);

module.exports = CheckIn;
