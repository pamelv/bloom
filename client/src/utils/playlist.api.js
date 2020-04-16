import axios from "axios";

export default {
  getPlaylistHappy: function () {
    return axios.get("/api/playlists/Happy");
  },
  getPlaylistBleh: function () {
    return axios.get("/api/playlists/Bleh");
  },
  getPlaylistSad: function () {
    return axios.get("/api/playlists/Sad");
  },
  savePlaylist:function(playlist){
    return axios.post("/api/playlist", playlist);
  }
};