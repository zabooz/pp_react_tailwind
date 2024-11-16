import { autoLogin } from './autoLogin';
import { dataKrakenTakes } from './dataKraken';
import { api } from '../../../api/api';
import { loginData, loginResponse } from '../../../interfaces/interfaces';

export const login = async ({ username, password }: loginData) => {
  const data = {
    username,
    password,
  };

  try {
    const response = await api.post<loginResponse>('/login', data);
    if (response.data.token) {
      localStorage.setItem('pp-token', response.data.token);
      await dataKrakenTakes({ col: 'visits' });
      await autoLogin();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
