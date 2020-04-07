import axios from "axios";

export default {
  getPoem: function() {
    return axios.get("http://localhost:3001/api/poem/happy");
  }
};
