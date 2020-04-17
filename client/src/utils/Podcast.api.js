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
  savePodcast: function (id, podcast) {
    return axios.post(`/api/user/${id}/podcasts`, podcast);
  },
  getSavedPodcast: function (id) {
    return axios.get(`/api/user/${id}/podcasts`);
  },
};
