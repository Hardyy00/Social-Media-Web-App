import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export const login = (formData) => API.post("/auth/login", formData);
