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
  key: string;
  catch: string;
  password: string;
}

export interface dataKrakenTradesData {
  key: string;
  value: string;
}

export interface userDataResponse {
  success: boolean;
  message: string;
  data: userData | LeaderBoardData;
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
  rank?: number;
  user?: userData;
}
export interface EnglishArrays {
  colors: string[];
  shapes: string[];
  textures: string[];
  sizes: string[];
  emotions: string[];
  tastes: string[];
  sounds: string[];
  ages: string[];
  intensities: string[];
  temperatures: string[];
  speeds: string[];
  qualities: string[];
  weatherTypes: string[];
  instruments: string[];
  fruits: string[];
  animals: string[];
  fantasyCreatures: string[];
  vegetables: string[];
  rpgClasses: string[];
  fantasyRaces: string[];
  occupations: string[];
  vehicles: string[];
  food: string[];
  tools: string[];
  beverages: string[];
  clothingItems: string[];
  bodyParts: string[];
  flowers: string[];
  desserts: string[];
}

export interface Question {
  question: string;
  answers: {
    answer: string;
    dataArr: string;
    imagePath: string;
  }[];
}
