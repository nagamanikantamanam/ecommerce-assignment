import axios from "axios";
const API_BASE_URL: string = "http://localhost:3000";
const api_public = axios.create({
  baseURL: API_BASE_URL,
});
export { api_public };
const api_private = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
export { api_private };
