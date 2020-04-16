import axios from "axios";

export default {
  // Add user
  addUser: function (data) {
    return axios.post("/api/user", data);
  },
  getUser: function (token) {
    return axios.get("/api/user", {
      headers: { Authorization: "Bearer " + token },
    });
  },
  // Get user token
  getToken: function (data) {
    return axios.post("/api/login", data);
  },
  findUserByEmail: function (email) {
    return axios.get("/api/users/" + email);
  },
  getMood: function (id) {
    return axios.get(`/api/user/${id}/moods`);
  },
  addMood: function (id, data) {
    return axios.post("/api/user/" + id + "/moods", data);
  },
  updatePw: function (id, data) {
    return axios.put("/api/user/" + id, data);
  },
};