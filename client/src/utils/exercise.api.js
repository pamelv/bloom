import axios from "axios";

export default {
  getExercise: function () {
    return axios.get("/api/exercise");
  },
  saveExercise: function (id, exercise) {
    return axios.post(`/api/user/${id}/exercises`, exercise);
  },
  getSavedExercise: function (id) {
    return axios.get(`/api/user/${id}/exercises`);
  },
};
