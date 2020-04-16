import axios from "axios";

export default {
    getExercise: function() {
        return axios.get("/api/exercise");
    },
    saveExercise: function(exercise) {
        return axios.post("/api/exercise", exercise)
    }
};