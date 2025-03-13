import axios from "axios";
const API_BASE_URL: string = "http://localhost:3000";
const public_api = axios.create({
  baseURL: API_BASE_URL,
});
export { public_api };
const private_api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
export { private_api };
