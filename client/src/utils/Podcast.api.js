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
  savePodcast: function (id, podcast, token) {
    return axios.post(`/api/user/${id}/podcasts`, podcast, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedPodcast: function (id, token) {
    return axios.get(`/api/user/${id}/podcasts`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};
