import axios from "axios";

export default {
  getPoem: function() {
    return axios.get("/api/poem/happy");
  }
};