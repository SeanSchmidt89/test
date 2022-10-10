import axios from "axios";

const apiBase = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export default apiBase;
