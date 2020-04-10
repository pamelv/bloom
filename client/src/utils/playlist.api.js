import axios from "axios";

export default {
  getPlaylist: function () {
    return axios.get("/api/playlists");
  },
};
