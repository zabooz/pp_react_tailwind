export interface DrawerData {
    title: string;
    paragraphs: Paragraph[];
}

interface Paragraph {
    id: string;
    defaultMessage: string;
}

export interface RegistryData {
    username: string;
    password: string;
    email: string;
    visits: number;
    generated_passwords: number;
    tested_passwords: number;
    generated_usernames: number;
    avatar: string;
}

export interface LoginData {
    username: string;
    password: string;
}
export interface LoginResponse {
    token: string;
}

export interface DataKrakenTakesData {
    col: string;
}
export interface DataKrakenGivesData {
    col?: string;
}
export interface DataKrakenGivesResponse {
    success: boolean;
    message: string;
    data: string[];
}

export interface StorageData {
    key: string;
    catch?: string;
    value: string;
    type: string;
}

export interface DataKrakenTradesData {
    key: string;
    value: string;
}

export interface UserDataResponse {
    success: boolean;
    message: string;
    data: UserData | LeaderBoardData;
}

export interface UserData {
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
    user?: UserData;
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

export interface Questions {
    question: string;
    answers: {
        answer: string;
        dataArr: string;
        imagePath: string;
    }[];
}
export interface PasswordStrength {
    result: number;
    points: Points;
}

export type Points = {
    [key: string]: {
        value: boolean;
        textTrue: string;
        textFalse: string;
    };
};
