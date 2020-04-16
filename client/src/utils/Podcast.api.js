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
  savePodcast:function(podcast){
    return axios.post("/api/podcast", podcast);
  }
};