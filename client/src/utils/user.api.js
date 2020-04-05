import axios from "axios";

export default {
  // Add user
  addUser: function(data) {
    return axios.post("http://localhost:3001/api/users", data);
  },
  // Get user login
  getUser: function(data) {
    return axios.get("http://localhost:3001/api/users", data);
  }
};
