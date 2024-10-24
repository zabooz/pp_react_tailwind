import { api } from "../../../api/api";
import axios from "axios";
import { registryData } from "../../../interfaces/interfaces";
import { login } from "./login";

export const register = async ({
  username,
  password,
  email,
  visits,
  generated_passwords,
  tested_passwords,
  generated_usernames,
  avatar,
}: registryData) => {
  const data = {
    username,
    password,
    email,
    visits,
    generated_passwords,
    tested_passwords,
    generated_usernames,
    avatar,
  };

  try {
    const response = await api.post(`/register`, data);

    if (response.status >= 200 && response.status < 300) {
      await login({ username, password });
      return true;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Spezifische Fehlerbehandlung für Axios-Fehler
      console.error("Axios-Fehler:", error.message);
      if (error.response) {
        // Fehlerantwort vom Server
        console.error("Serverantwort-Fehler:", error.response.data);
      } else if (error.request) {
        // Keine Antwort vom Server erhalten
        console.error("Keine Antwort erhalten:", error.request);
      }
    } else {
      // Allgemeine Fehlerbehandlung
      console.error("Unbekannter Fehler:", error);
    }
  }
};
