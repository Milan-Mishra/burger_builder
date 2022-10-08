import axios from "axios";

export const orderAxios = axios.create({
  baseURL: "https://burger-builder-raj-gohil-default-rtdb.firebaseio.com/",
});
