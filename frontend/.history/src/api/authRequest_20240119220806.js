import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export function login(formData) {
  API.post("/auth/login", formDat);
}
