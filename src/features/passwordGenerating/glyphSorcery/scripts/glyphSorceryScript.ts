import { generateEzPw } from "./passwordSandBox";
import { dataKrakenTakes } from "../../../../components/login.register/backend/dataKraken";

export const glyphSorcery = async (language: string, length: number) => {
  const password = generateEzPw(length, language);
  const key = `${password}`;
  const data = {
    key: key,
    catch: length.toString(),
    type: "password",
    value: password,
  };
  dataKrakenTakes({ col: "generated_passwords" });
  return data;
};
