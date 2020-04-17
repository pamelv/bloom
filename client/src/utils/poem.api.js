import axios from "axios";

export default {
  getPoemHappy: function () {
    return axios.get("/api/poem/happy");
  },

  getPoemSad: function () {
    return axios.get("/api/poem/hope");
  },

  getPoemBleh: function () {
    return axios.get("/api/poem/life");
  },

  savePoem: function (id, poem) {
    return axios.post(`/api/user/${id}/poems`, poem);
  },
  getSavedPoem: function (id) {
    return axios.get(`/api/user/${id}/poems`);
  },
};
