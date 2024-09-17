

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
export interface dataKrakenGivesResponse {
  success: boolean;
  message: string;
  data: string[];  
}

export interface StorageData {

    pwid: string;
    catchId: string;
    catch: number;
    password: string;
    app: string;

}

export interface dataKrakenTradesData {
  key: string;
  value: string;
}

export interface userDataResponse {
  success: boolean;
  message: string;
  data: userData | LeaderBoardData
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
export interface LeaderBoardData {
  username: string;
  visits: number;
  generated_passwords: number;
  tested_passwords: number;
  generated_usernames: number;
  avatar: string;
  rank?: number
  user?: userData
}