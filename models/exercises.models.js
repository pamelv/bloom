const mongoose = require("mongoose");
const { Schema } = mongoose;
const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  equipment: {
    type: [],
    required: true,
  },
});
const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;
