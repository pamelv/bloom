import axios from "axios";

export default {
  getPlaylistHappy: function () {
    return axios.get("http://localhost:3001/api/playlist/");
  },
};
