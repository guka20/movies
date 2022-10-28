import axios from "axios";
export default axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params: {
    api_key: "0b5380ff5db66ea8cdf18e1998943c3b",
  },
});
