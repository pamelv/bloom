const mongoose = require("mongoose");

const { Schema } = mongoose;

const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});

const Playlist = mongoose.model("Playlists", PlaylistSchema);

module.exports = Playlist;
