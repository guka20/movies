import axios from "./api";

export const fetch = async (id: string) => {
  try {
    const response = await axios.get(id);
    console.log(response);
    const data = response.data;
    return data;
  } catch (error: any) {
    console.log(error);
  }
};
