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
  savePlaylist: function (id, playlist, token) {
    return axios.post(`/api/user/${id}/playlists`, playlist, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedPlaylist: function (id, token) {
    return axios.get(`/api/user/${id}/playlists`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};
