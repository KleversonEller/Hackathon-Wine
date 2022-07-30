import axios from "axios";

const URL_BASE = "https://wine-club-proxy.herokuapp.com/modalities";

export const getPlans = async () => {
  const { data } = await axios.get(URL_BASE);
  return data[0].plans;
};
