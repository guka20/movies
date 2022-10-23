import axios from "axios";
const key = "pk_z18tn6d6g86tqymg4";
export default axios.create({
  baseURL: "https://imdb-api.com/en/API",
  headers: {
    "x-api-key": key,
  },
});
