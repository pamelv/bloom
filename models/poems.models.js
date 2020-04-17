const mongoose = require("mongoose");

const { Schema } = mongoose;

const PoemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  lines: {
    type: Array,
    required: true,
  },
});

const Poem = mongoose.model("Poems", PoemSchema);

module.exports = Poem;
