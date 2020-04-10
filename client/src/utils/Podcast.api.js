import axios from "axios";

export default {
  getPodcast: function () {
    return axios.get("/api/podcasts");
  },
};
