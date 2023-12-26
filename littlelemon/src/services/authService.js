import { saveData, clearToken } from "./tokenService";
import api from "../utils/api";
export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    saveData(response.data);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};
export const register = async (username, email, password) => {
  try {
    const response = await api.post("/register", { username, email, password  });
      return response;
  
  } catch (error) {
    throw new Error("Registration failed");
  }
};
