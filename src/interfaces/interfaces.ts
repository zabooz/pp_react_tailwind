export interface DrawerData {
  title: string;
  paragraphs: string[];
}
export interface registryData {
  username: string;
  password: string;
  email: string;
  visits: number;
  generated_passwords: number;
  tested_passwords: number;
  generated_usernames: number;
  avatar: string;
}

export interface loginData {
  username: string;
  password: string;
}
export interface loginResponse {
  token: string;
}

export interface dataKrakenTakesData {
  col: string;
}
export interface dataKrakenGivesData {
  col?: string;
}

export interface dataKrakenTradesData {
  key: string;
  value: string;
}

export interface userDataResponse {
  success: boolean;
  message: string;
  data: userData;
}

export interface userData {
  username: string;
  email: string;
  visits: number;
  generated_passwords: number;
  tested_passwords: number;
  generated_usernames: number;
  avatar: string;
}
