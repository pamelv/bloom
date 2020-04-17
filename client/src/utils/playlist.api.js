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
  savePlaylist: function (id, playlist) {
    return axios.post(`/api/user/${id}/playlists`, playlist);
  },
  getSavedPlaylist: function (id) {
    return axios.get(`/api/user/${id}/playlists`);
  },
};
