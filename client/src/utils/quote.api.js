import axios from "axios";

export default {
    getQuote: function() {
        return axios.get("/api/quote");
    }
};