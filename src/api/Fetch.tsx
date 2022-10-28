import axios from "./api";

export const fetchData = async (id: string) => {
  return axios
    .get(id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.status);
    });
};
