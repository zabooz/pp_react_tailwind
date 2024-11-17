import { apiToken } from '../../../api/api';
import {
  DataKrakenTakesData,
  DataKrakenGivesData,
  DataKrakenTradesData,
  UserDataResponse,
} from '../../../interfaces/interfaces';

export const dataKrakenTakes = async ({ col }: DataKrakenTakesData) => {
  if (!localStorage.getItem('pp-token')) {return;}
  try {
    const response = await apiToken.post('/dataKrakenTakes', { col });

    if (response.status >= 200 && response.status < 300) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export async function dataKrakenGives({ col }: DataKrakenGivesData = {}) {
  if (!localStorage.getItem('pp-token')) {return;}
  let data;
  try {
    const response = await apiToken.get<UserDataResponse>(
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

export async function dataKrakenTrades({ key, value }: DataKrakenTradesData) {
  if (!localStorage.getItem('pp-token')) {return;}

  try {
    await apiToken.put<UserDataResponse>('/dataKrakenTrades', { key, value });
  } catch (error) {
    console.log(error);
  }
}
