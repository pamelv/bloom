import axios from "axios";

export default {
  getPodcastHappy: function () {
    return axios.get("/api/podcasts/happy");
  },
  getPodcastBleh: function () {
    return axios.get("/api/podcasts/bleh");
  },
  getPodcastSad: function () {
    return axios.get("/api/podcasts/sad");
  },
  savePodcast: function (podcast, token) {
    return axios.post(`/api/podcast`, podcast, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedPodcast: function (token) {
    return axios.get(`/api/podcast`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};
