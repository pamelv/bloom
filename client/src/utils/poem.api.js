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

  savePoem: function (poem, token) {
    return axios.post(`/api/poem`, poem, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedPoem: function (token) {
    return axios.get(`/api/poem`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};
