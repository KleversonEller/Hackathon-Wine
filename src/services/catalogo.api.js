import axios from "axios";

const URL_BASE = "https://wine-back-test.herokuapp.com/products?page=1&limit=10";

export const getCatalogo = async () => {
  const { data } = await axios.get(URL_BASE);
  return data.items;
};
