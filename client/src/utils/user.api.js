import axios from "axios";

export default {
  // Add user
  addUser: function (data) {
    return axios.post("/api/users", data);
  },
  getUser: function (token) {
    return axios.get("/api/users", {
      headers: { Authorization: "Bearer " + token },
    });
  },
  // Get user token
  findUser: function (data) {
    return axios.post("/api/login", data);
  },
  findUserByEmail: function (email) {
    return axios.get("/api/users/" + email);
  },
  getMood: function (id) {
    return axios.get(`/api/user/${id}/moods`);
  },
  activeUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  addMood: function (id, data) {
    return axios.post("/api/user/" + id + "/moods", data);
  },
  updatePw: function (id, data) {
    return axios.put("/api/user/" + id, data);
  },
};
