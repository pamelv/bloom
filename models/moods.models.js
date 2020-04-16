const mongoose = require("mongoose");

const { Schema } = mongoose;

const MoodsSchema = new Schema({
  emotion: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  emotionCreatedAt: {
    type: Date,
    default: Date(),
  },
  comment: {
    type: String,
  },
});

const Moods = mongoose.model("Moods", MoodsSchema);

module.exports = Moods;