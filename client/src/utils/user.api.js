import axios from "axios";

export default {
  // Add user
  addUser: function(data) {
    return axios.post("http://localhost:3001/api/users", data);
  },
  // Get user login
  getUser: function(data) {
    return axios.get("http://localhost:3001/api/users", data);
  },
  // Get user login
  findUser: function(email) {
    return axios.get("http://localhost:3001/api/users/" + email);
  },
  getMood: function(id) {
    return axios.get("http://localhost:3001/api/user/" + id + "/moods");
  },
  user: function(id) {
    return axios.get("http://localhost:3001/api/user/" + id);
  },
  addMood: function(id) {
    return axios.post("http://localhost:3001/api/user/" + id + "/moods");
  }
};
