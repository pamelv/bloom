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

  savePoem: function (id, poem, token) {
    return axios.post(`/api/user/${id}/poems`, poem, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedPoem: function (id, token) {
    return axios.get(`/api/user/${id}/poems`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};
