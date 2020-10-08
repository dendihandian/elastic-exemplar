import axios from "axios";

const instance = axios.create({
  baseURL: process.env.ELASTIC_BASE_URL,
});

export default instance;
