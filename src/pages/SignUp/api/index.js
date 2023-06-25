import { mainApiConfig } from "config/mainApi";

export const signUpRequest = (body) => mainApiConfig.post("/auth/signup", body);