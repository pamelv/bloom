import axios from "axios";

export default {
  getExercise: function () {
    return axios.get("/api/exercise");
  },
  saveExercise: function (id, exercise, token) {
    return axios.post(`/api/user/${id}/exercises`, exercise, {
      headers: { Authorization: "Bearer " + token },
    });
  },
  getSavedExercise: function (id, token) {
    return axios.get(`/api/user/${id}/exercises`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};
