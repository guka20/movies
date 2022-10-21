import axios from "./api";

export const fetchData = async (id: string) => {
  return axios
    .get(id + "/k_p8ciwzz7")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.status);
    });
};
