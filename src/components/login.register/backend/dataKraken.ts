import {
  dataKrakenTakesData,
  dataKrakenGivesData,
  dataKrakenTradesData,
  userDataResponse,
} from "../../../interfaces/interfaces";
import { apiToken } from "../../../api/api";

export const dataKrakenTakes = async ({ col }: dataKrakenTakesData) => {
  if (!localStorage.getItem("pp-token")) return;
  try {
    const response = await apiToken.post(`/dataKrakenTakes`, { col });

    if (response.status >= 200 && response.status < 300) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export async function dataKrakenGives({ col }: dataKrakenGivesData = {}) {
  if (!localStorage.getItem("pp-token")) return;
  let data;
  try {
    const response = await apiToken.get<userDataResponse>(
      `/dataKrakenGives?col=${col}`
    );

    if (response.status >= 200 && response.status < 300) {
      data = response.data;
    }
  } catch (error) {
    console.log(error);
  }

  return data;
}

export async function dataKrakenTrades({ key, value }: dataKrakenTradesData) {
  if (!localStorage.getItem("pp-token")) return;

  try {
    await apiToken.put<userDataResponse>(`/dataKrakenTrades`, { key, value });
  } catch (error) {
    console.log(error);
  }
}
