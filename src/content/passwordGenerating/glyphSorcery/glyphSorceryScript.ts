import { generateEzPw } from "./passwordSandBox";
import { dataKrakenTakes } from "../../../backend/dataKraken";

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
