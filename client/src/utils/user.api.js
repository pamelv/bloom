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
  getMood: function (id, token) {
    return axios.get(`/api/user/${id}/moods`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  addMood: function (id, data, token) {
    return axios.post("/api/user/" + id + "/moods", data, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  updatePw: function (id, data) {
    return axios.put("/api/user/" + id, data);
  },

  deleteMood: function (token, data) {
    return axios.delete("/api/moods", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json; charset=utf-8",
      },
      data: { id: data },
    });
  },
};
