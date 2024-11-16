import { apiToken } from "../../../api/api";
import { dataKrakenGives } from "./dataKraken";
export async function autoLogin() {
  try {
    if (!localStorage.getItem("pp-token")) return false;
    const response = await apiToken.get(`/user`);

    if (response.status >= 200 && response.status < 300) {
      const response = await dataKrakenGives();

      if (response && response.success) {
        sessionStorage.setItem("userStats", JSON.stringify(response.data));
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    localStorage.removeItem("pp-token");
    console.log(error);
  }
}