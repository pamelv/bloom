const mongoose = require("mongoose");

const { Schema } = mongoose;

const CheckInSchema = new Schema({
  emotion: {
    type: String,
    required: true
  },
  emoji: {
    type: Number,
    required: true
  },
  emotionCreatedAt: {
    type: Date,
    default: Date.now()
  }
});

const CheckIn = mongoose.model("CheckIn", CheckInSchema);

module.exports = CheckIn;
