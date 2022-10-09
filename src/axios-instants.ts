import axios from "axios";

export const orderAxiosInstance = axios.create({
  baseURL: "https://burger-builder-raj-gohil-default-rtdb.firebaseio.com/",
});
