import axios from "axios";

export default {
  getExercise: function () {
    return axios.get("/api/exercisedata");
  },
  saveExercise: function (exercise, token) {
    return axios.post(`/api/exercise`, exercise, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedExercise: function (token) {
    return axios.get(`/api/exercise`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};
