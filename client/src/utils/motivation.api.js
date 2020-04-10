import axios from "axios";

export default {
  getMotivation: function () {
    return axios.get("/api/motivation");
  },
};
